import {Component, OnInit} from '@angular/core';
import {VideoResponse} from '../../model/video-response';
import {VideoService} from '../../service/video/video.service';
import {AuthService} from '../../service/auth/auth.service';
import {element} from 'protractor';
import {CheckedCheckbox} from '../../model/checked-checkbox';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  videos: VideoResponse[] = [];
  currentUserId = 0;
  videoIds: number[] = [];
  isShowNavStudio = false;
  totalVideoId = 0;
  isCheckAllVideoID = false;

  constructor(private videoService: VideoService,
              private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  isChecked: CheckedCheckbox[] = [];

  ngOnInit() {
    this.getAllVideosCreateOfUser();
  }

  getAllVideosCreateOfUser() {
    this.videoService.getAllVideoCreatedOfUser(this.currentUserId).subscribe((data) => {
      this.videos = data;
    });
  }

  onCheck(evt) {
    if (!this.videoIds.includes(evt)) {
      this.videoIds.push(evt);
      this.videos = this.videos.map((video) => {
        if (video.id === evt) {
          video.select = true;
          return video;
        }
        return video;
      });
      if (this.videoIds.length === this.videos.length) {
        this.isCheckAllVideoID = true;
      }
    } else {
      const index = this.videoIds.indexOf(evt);
      if (index > -1) {
        this.videoIds.splice(index, 1);
        this.isCheckAllVideoID = false;
      }
    }
    if (this.videoIds.length > 0) {
      this.isShowNavStudio = true;
    } else {
      this.isShowNavStudio = false;
    }
    this.totalVideoId = this.videoIds.length;
    console.log(this.videoIds);
  }

  getAllVideoId() {
    if (this.videoIds.length === 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.videos.length; i++) {
        this.videos[i].select = true;
        this.videoIds.push(this.videos[i].id);
      }
      this.isCheckAllVideoID = true;
    } else if (this.videoIds.length < this.videos.length) {
      // tslint:disable-next-line:prefer-for-of
      this.videoIds.splice(0, this.videoIds.length);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.videos.length; i++) {
        // this.videos[i].select = true;
        this.videoIds.push(this.videos[i].id);
      }
      this.videos = this.videos.map((video) => {
        video.select = true;
        return video;
      });
      console.log(this.videos);
      this.isCheckAllVideoID = true;
    } else if (this.videoIds.length === this.videos.length) {
      this.videoIds.splice(0, this.videoIds.length);
      this.isCheckAllVideoID = false;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.videos.length; i++) {
        this.videos[i].select = false;
      }
      this.isCheckAllVideoID = false;
    }
    if (this.videoIds.length > 0) {
      this.isShowNavStudio = true;
    } else {
      this.isShowNavStudio = false;
    }
    this.totalVideoId = this.videoIds.length;
    console.log(this.videoIds);
  }

}
