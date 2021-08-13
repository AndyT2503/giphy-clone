import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface GifsState {
  totalCount: number;
  filterGif: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'gifs' })
export class GifsStore extends EntityStore<GifsState> {

  constructor() {
    super();
  }

}
