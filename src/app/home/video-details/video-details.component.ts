import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';
import {AuthService} from '../../service/auth/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SubscriberService} from '../../service/subscriber/subscriber.service';

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
  checkSubscriber: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService,
              private authService: AuthService,
              private router: Router,
              private subscriberService: SubscriberService) {
    this.currentUserId = this.authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.videoId = +paramMap.get('videoId');
      this.getVideoByVideoId(this.videoId);
    });
  }
  getVideoByVideoId(videoId: number) {
    this.videoService.getVideoByVideoId(videoId).subscribe((data) => {
      this.video = data;
      this.checkMember();
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
  reloadComponent(videoId: number) {
    const currentUrl = `/video/${videoId}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  addNewMember(userId: number, memberId: number) {
    this.subscriberService.addNewMember(userId, memberId).subscribe((data) => {
      this.getVideoByVideoId(this.videoId);
    });
  }
  checkMember() {
    this.subscriberService.checkMember(this.video.user.id, this.currentUserId).subscribe((data) => {
      this.checkSubscriber = data.isSubscriber;
    });
  }
}
