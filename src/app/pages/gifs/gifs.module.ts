import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifsHeaderComponent } from './components/gifs-header/gifs-header.component';
import { GifDetailComponent } from './gif-detail/gif-detail.component';
import { GifsRoutingModule } from './gifs-routing.module';
import { GifsComponent } from './gifs/gifs.component';


const nzModule = [
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  NzGridModule,
  NzAvatarModule,
  NzTagModule,
  NzPaginationModule 
]

@NgModule({
  declarations: [
    GifDetailComponent,
    GifsComponent,
    GifsHeaderComponent,
    GifListComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    FormsModule,
    ScrollingModule,
    nzModule
  ]
})
export class GifsModule { }
