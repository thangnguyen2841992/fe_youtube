import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';
import {AuthService} from '../../service/auth/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SubscriberService} from '../../service/subscriber/subscriber.service';
import {LikeService} from '../../service/like/like.service';
import {DislikeService} from '../../service/dislike/dislike.service';

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
  isLikeVideo: boolean;
  isDisLike: boolean;
  videoUrl: string;
  isShowButton = false;

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService,
              private authService: AuthService,
              private router: Router,
              private subscriberService: SubscriberService,
              private likeService: LikeService,
              private disLikeService: DislikeService) {
    this.currentUserId = this.authService.currentUserValue.id;

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.videoId = +paramMap.get('videoId');
    });
  }

  getVideoByVideoId(videoId: number) {
    this.videoService.getVideoByVideoId(videoId).subscribe((data) => {
      this.video = data;
      this.videoUrl = data.url;
      console.log(this.videoUrl);
      this.checkMember();
      this.checkLikeVideo(this.videoId, this.currentUserId);
      this.checkDisLikeVideo(this.videoId, this.currentUserId);
    });
  }

  ngOnInit() {
    this.getVideoByVideoId(this.videoId);
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

  addNewLike(videoId: number, userId: number) {
    this.likeService.addNewLike(videoId, userId).subscribe((data) => {
      this.getVideoByVideoId(this.videoId);
    });
  }

  checkLikeVideo(videoId: number, userId: number) {
    this.likeService.checkLikeVideo(videoId, userId).subscribe((data) => {
      this.isLikeVideo = data.isSubscriber;
    });
  }

  addNewDisLike(videoId: number, userId: number) {
    this.disLikeService.addNewDisLike(videoId, userId).subscribe((data) => {
      this.getVideoByVideoId(this.videoId);
    });
  }

  checkDisLikeVideo(videoId: number, userId: number) {
    this.disLikeService.checkDisLike(videoId, userId).subscribe((data) => {
      this.isDisLike = data.isSubscriber;
    });
  }
  showButton() {
    this.isShowButton = true;
  }
}
