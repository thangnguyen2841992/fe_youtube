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

  constructor(private likedVideoService: LikedVideoService,
              private authService: AuthService) {
    this.currentUserID = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllLikedVideoOfUser();
  }

  getAllLikedVideoOfUser() {
    this.likedVideoService.getAllLikedVideoOfUser(this.currentUserID).subscribe((data) => {
      this.likedVideos = data;
    });
  }
}
