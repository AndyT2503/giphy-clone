import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gifs',
    loadChildren: () => import('./pages/gifs/gifs.module').then(m => m.GifsModule),
  },
  { path: '**', redirectTo: 'gifs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
