import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GifsStore } from '../../state/gifs.store';

@Component({
  selector: 'app-gifs-header',
  templateUrl: './gifs-header.component.html',
  styleUrls: ['./gifs-header.component.scss']
})
export class GifsHeaderComponent implements OnInit {

  filterGif!: string;
  constructor(private readonly gifsStore: GifsStore,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchGif(): void {
    this.gifsStore.update({filterGif: this.filterGif})
    this.router.navigate(['gifs'])
  }

  backToHome(): void {
    this.filterGif = '';
    this.gifsStore.update({filterGif: undefined})
    this.router.navigate(['gifs'])
  }
}
