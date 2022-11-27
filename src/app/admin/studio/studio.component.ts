import {Component, OnInit} from '@angular/core';
import {VideoResponse} from '../../model/video-response';
import {VideoService} from '../../service/video/video.service';
import {AuthService} from '../../service/auth/auth.service';
import {element} from 'protractor';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  videos: VideoResponse[] = [];
  currentUserId = 0;
  videoIds: number[] = [];
  isCheckAll = false;
  isShowNavStudio = false;
  totalVideoId = 0;
  isCheckAllVideoID = false;
  constructor(private videoService: VideoService,
              private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllVideosCreateOfUser();
    this.getIsShowNavItem();
  }

  getAllVideosCreateOfUser() {
    this.videoService.getAllVideoCreatedOfUser(this.currentUserId).subscribe((data) => {
      this.videos = data;
    });
  }

  onCheck(evt) {
    if (!this.videoIds.includes(evt)) {
      this.videoIds.push(evt);
      if (this.videoIds.length === this.videos.length) {
        this.isCheckAllVideoID  = true;
      }
    } else {
      const index = this.videoIds.indexOf(evt);
      if (index > -1) {
        this.videoIds.splice(index, 1);
        this.isCheckAll = false;
        this.isCheckAllVideoID  = false;
      }
    }
    this.totalVideoId = this.videoIds.length;
    console.log(this.videoIds);
  }

  getAllVideoId() {
    if (this.videoIds.length === 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.videos.length; i++) {
        this.videoIds.push(this.videos[i].id);
        // const checkbox = document.getElementById(
        //   'flexCheckDefault' + i ,
        // ) as HTMLInputElement | null;
        // checkbox.checked = true;
      }
      this.isCheckAllVideoID = true;

    } else {
      this.videoIds.splice(0, this.videoIds.length);
      this.isCheckAllVideoID = false;

    }
    this.isCheckAll = !this.isCheckAll;
    this.totalVideoId = this.videoIds.length;
    console.log(this.videoIds);
  }
  getIsShowNavItem() {
    this.isShowNavStudio = this.videoIds.length > 0;
  }
}
