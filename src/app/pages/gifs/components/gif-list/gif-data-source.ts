import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { IGifData } from '../../state/gif.model';
import { GifsService } from '../../state/gifs.service';

export class GifDataSource extends DataSource<IGifData> {
  private limitDefault = 25;

  private cachedData: IGifData[] = [];

  private fetchedPages = new Set<number>();

  private dataStream = new BehaviorSubject<IGifData[]>(this.cachedData);

  private complete$ = new Subject<void>();

  private disconnect$ = new Subject<void>();

  constructor(
    private readonly gifsServices: GifsService,
    private readonly total: Observable<number | undefined>,
    private readonly filterGif: string,
  ) {
    super();
  }

  completed(): Observable<void> {
    return this.complete$.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<IGifData[]> {
    this.setup(collectionViewer);
    return this.dataStream;
  }

  disconnect(): void {
    this.disconnect$.next();
    this.disconnect$.complete();
  }

  public fetchPage(offset: number): void {
    if (this.fetchedPages.has(offset)) {
      return;
    }
    this.fetchedPages.add(offset);

    if (this.filterGif) {
      this.gifsServices
        .searchGif(offset, this.filterGif)
        .subscribe((res) => {
          this.cachedData.splice(
            offset,
            this.limitDefault,
            ...res.data
          );
          this.dataStream.next(this.cachedData);
        });
    } else {
      this.gifsServices
        .getTrendingGifs(offset)
        .subscribe((res) => {
          this.cachedData.splice(
            offset,
            this.limitDefault,
            ...res.data
          );
          this.dataStream.next(this.cachedData);
        });
    }

  }

  private setup(collectionViewer: CollectionViewer): void {
    this.fetchPage(0);
    this.total.pipe(
      first((num) => !!num)).subscribe((totalCount) => {
        collectionViewer.viewChange
          .pipe(takeUntil(this.complete$), takeUntil(this.disconnect$))
          .subscribe((range) => {
            if (this.cachedData.length >= totalCount!) {
              this.complete$.next();
              this.complete$.complete();
            } else {
              const endIndex = this.getPageIndex(range.end);
              this.fetchPage(endIndex * this.limitDefault);
            }
          });
      });
  }

  private getPageIndex(index: number): number {
    return Math.floor(index / this.limitDefault);
  }
}
