import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IGifListResponse, IGifResponse, IViewCountResponse } from './gif.model';
import { GifsStore } from './gifs.store';

@Injectable({ providedIn: 'root' })
export class GifsService {

  apiKey = environment.apiKey;
  constructor(private gifsStore: GifsStore, private http: HttpClient) {
  }


  searchGif(offset: number, filterGif: string) {
    return this.http.get<IGifListResponse>('v1/gifs/search', {
      params: {
        offset: `${offset}`,
        type: 'gifs',
        q: filterGif,
        api_key: this.apiKey,
      }
    }).pipe(
      tap((res) => this.gifsStore.update({ totalCount: res.pagination!.total_count}))
    );
  }

  getTrendingGifs(offset: number) {
    return this.http.get<IGifListResponse>('v1/gifs/trending', {
      params: {
        offset: `${offset}`,
        api_key: this.apiKey
      }
    }).pipe(
      tap((res) => this.gifsStore.update({ totalCount: res.pagination!.total_count}))
    );
  }

  getGifById(id: string) {
    return this.http.get<IGifResponse>(`v1/gifs/${id}`, {
      params: {
        api_key: this.apiKey
      }
    });
  }

  getViewCount(id: string) {
    return this.http.get<IViewCountResponse>(`https://giphy.com/api/v1/proxy-gif/${id}/view-count/`);
  }

  getRelatedGifs(id: string, offset: number) {
    return this.http.get<IGifListResponse>('v1/gifs/related', {
      params: {
        gif_id: id,
        offset: `${offset}`,
        api_key: this.apiKey
      }
    });
  }

}
