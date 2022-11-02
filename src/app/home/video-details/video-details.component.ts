import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';
import {AuthService} from '../../service/auth/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  videoId: number;
  video: VideoResponse = {};
  currentUserId: number;
  videos: VideoResponse[] = [];
  videoForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService,
              private authService: AuthService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.videoId = +paramMap.get('videoId');
      this.getVideoByVideoId(this.videoId);
    });
    this.currentUserId = this.authService.currentUserValue.id;
  }
  getVideoByVideoId(videoId: number) {
    this.videoService.getVideoByVideoId(videoId).subscribe((data) => {
      this.video = data;
    });
  }
  ngOnInit() {
    this.getAllVideoOtherUser();
  }


  getAllVideoOtherUser() {
    this.videoService.getAllVideoOtherUserOtherVideo(this.currentUserId, this.videoId).subscribe((data) => {
      this.videos = data;
    });
  }
}
