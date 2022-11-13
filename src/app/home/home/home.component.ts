import {Component, OnInit} from '@angular/core';
import {Video} from '../../model/video';
import {VideoService} from '../../service/video/video.service';
import {AuthService} from '../../service/auth/auth.service';
import {WatchedVideoService} from '../../service/watched-video/watched-video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];
  currentUserId: number;

  constructor(private videoService: VideoService,
              private authService: AuthService,
              private watchedVideoService: WatchedVideoService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllVideo();
  }

  getAllVideo() {
    this.videoService.getAllVideo(this.currentUserId).subscribe((data) => {
      this.videos = data;
    });
  }
  addNewWatchedVideo(videoId: number) {
    this.watchedVideoService.addNewWatchedVideo(videoId, this.currentUserId).subscribe((data) => {
    });
  }
}
