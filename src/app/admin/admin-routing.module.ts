import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudioComponent} from './studio/studio.component';


const routes: Routes = [
  {
    path: 'studio',
    component: StudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
