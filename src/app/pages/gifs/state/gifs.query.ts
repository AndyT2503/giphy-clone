import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GifsStore, GifsState } from './gifs.store';

@Injectable({ providedIn: 'root' })
export class GifsQuery extends QueryEntity<GifsState> {

  constructor(protected store: GifsStore) {
    super(store);
  }

}
