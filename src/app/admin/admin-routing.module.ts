import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudioComponent} from './studio/studio.component';
import {PlaylistComponent} from './playlist/playlist.component';


const routes: Routes = [
  {
    path: 'studio',
    component: StudioComponent
  } ,
  {
    path: 'playlist',
    component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
