import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../../service/video/video.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-studio',
  templateUrl: './nav-studio.component.html',
  styleUrls: ['./nav-studio.component.css']
})
export class NavStudioComponent implements OnInit {
  @Input()
  totalVideoID: number;
  @Input()
  isCheckAllVideoId = false;
  @Input()
  videoIDs: number[] = [];
  @Input()
  currentUserId: number;

  constructor(private videoService: VideoService,
              private router: Router) {
  }

  ngOnInit() {
  }

  deleteVideo() {
    this.videoService.deleteListVideo(this.videoIDs).subscribe(() => {
      this.reloadComponent();
    });
  }
  reloadComponent() {
    const currentUrl = `/admin/studio`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
