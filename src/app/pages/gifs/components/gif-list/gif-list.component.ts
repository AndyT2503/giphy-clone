import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GifsQuery } from '../../state/gifs.query';
import { GifsService } from '../../state/gifs.service';
import { GifDataSource } from './gif-data-source';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent implements OnInit {

  listGif!: GifDataSource;
  totalCount$ = this.gifsQuery.select(x => x.totalCount);
  constructor(private readonly gifsService: GifsService,
    private readonly gifsQuery: GifsQuery,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.gifsQuery.select(x => x.filterGif).subscribe(filter => {
      this.listGif = new GifDataSource(
        this.gifsService,
        this.totalCount$,
        filter
      );
    })
  }

  openDetail(slug: string): void {
    this.router.navigate([`gifs/${slug}`])
  }
}
