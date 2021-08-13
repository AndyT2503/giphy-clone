import { GifDetailComponent } from './gif-detail/gif-detail.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifsComponent } from './gifs/gifs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GifsComponent,
    children: [
      {
        path: '',
        component: GifListComponent
      },
      {
        path: ':slug',
        component: GifDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
