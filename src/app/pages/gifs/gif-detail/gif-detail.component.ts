import { GifsService } from './../state/gifs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGifData } from '../state/gif.model';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {
  gifId!: string
  gifData = {} as IGifData;
  viewCount!: number;

  relateGifs: IGifData[] = [];

  gifsRelatedPagination: {
    pageIndex: number;
    pageSize: number;
  } = {
    pageIndex: 1,
    pageSize: 25
  }
  constructor(private readonly route: ActivatedRoute,
    private readonly gifService: GifsService) { }

  ngOnInit(): void {
    this.getGifId();
    this.getGifData();
    this.getViewCount();
    this.getRelatedGifs(0);
  }

  getGifData(): void {
    this.gifService.getGifById(this.gifId).subscribe((res => {
      this.gifData = res.data;
    }))
  }

  getRelatedGifs(offset: number): void {
    this.gifService.getRelatedGifs(this.gifId, offset).subscribe(x => {
      this.relateGifs = x.data;
    })
  }

  onPageIndexRelateGifsChange(index: number): void {
    this.gifsRelatedPagination.pageIndex = index;
    const offset = index * this.gifsRelatedPagination.pageSize;
    this.getRelatedGifs(offset);
  }

  getGifId(): void {
    const slug: string = this.route.snapshot.params.slug;
    const slugArray = slug.split("-");
    this.gifId = slugArray[slugArray.length - 1];
  }

  getViewCount(): void {
    this.gifService.getViewCount(this.gifId).subscribe(res => {
      this.viewCount = res?.viewCount || 0;
    })
  }

  goToUrl(url: string): void {
    window.open(url, '_blank')
  }

  favorite(): void {
    //TODO: Implement
  }

  getCopyLink(): void {
    //TODO: Implement
  }
}
