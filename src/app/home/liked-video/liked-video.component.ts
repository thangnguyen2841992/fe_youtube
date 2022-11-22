import {Component, OnInit} from '@angular/core';
import {LikedVideoService} from '../../service/liked-video/liked-video.service';
import {LikedVideo} from '../../model/liked-video';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-liked-video',
  templateUrl: './liked-video.component.html',
  styleUrls: ['./liked-video.component.css']
})
export class LikedVideoComponent implements OnInit {

  likedVideos: LikedVideo[] = [];
  currentUserID: number;
  limit = 5;

  constructor(private likedVideoService: LikedVideoService,
              private authService: AuthService) {
    this.currentUserID = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllLikedVideosOfUser();
  }
  getAllLikedVideosOfUser() {
    this.likedVideoService.getAllLikedVideoOfUser(this.currentUserID, this.limit).subscribe((data) => {
      this.likedVideos = data;
      let time = this.likedVideos[0].likedVideoTime;
      console.log(time);
      for (let i = 1; i < this.likedVideos.length; i++) {
        if (this.likedVideos[i].likedVideoTime === time) {
          this.likedVideos[i].likedVideoTime = '';
        } else {
          time = this.likedVideos[i].likedVideoTime;
        }
      }
    });
  }
}
