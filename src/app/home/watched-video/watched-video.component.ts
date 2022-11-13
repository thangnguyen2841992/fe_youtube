import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {WatchedVideoService} from '../../service/watched-video/watched-video.service';
import {WatchedVideo} from '../../model/watched-video';

@Component({
  selector: 'app-watched-video',
  templateUrl: './watched-video.component.html',
  styleUrls: ['./watched-video.component.css']
})
export class WatchedVideoComponent implements OnInit {
  currentUserId: number;
  watchedVideos: WatchedVideo[] = [];
  constructor(private authService: AuthService,
              private watchedVideoService: WatchedVideoService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllWatchedVideosOfUser();
  }
  getAllWatchedVideosOfUser() {
    this.watchedVideoService.getAllWatchedVideoOfUser(this.currentUserId).subscribe((data) => {
      this.watchedVideos = data;
    });
  }

}
