import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VideoCreateComponent} from './video-create/video-create.component';
import {TestComponent} from './test/test.component';
import {VideoDetailsComponent} from './video-details/video-details.component';
import {FindVideoByHastagComponent} from './find-video-by-hastag/find-video-by-hastag.component';
import {WatchedVideoComponent} from './watched-video/watched-video.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';


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
  },
  {
    path: 'hastag/:hastagId',
    component: FindVideoByHastagComponent
  },
  {
    path: 'history/video/:userId',
    component: WatchedVideoComponent
  },
  {
    path: 'searchByName/:name',
    component: SearchByNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
