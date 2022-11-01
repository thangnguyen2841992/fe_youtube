import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideoCreateComponent} from './video-create/video-create.component';
import {TestComponent} from './test/test.component';
import {VideoDetailsComponent} from './video-details/video-details.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'video/create',
    component: VideoCreateComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'video/:videoId',
    component: VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
