import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';
import {AuthService} from '../../service/auth/auth.service';
import {SubscriberService} from '../../service/subscriber/subscriber.service';
import {LikeService} from '../../service/like/like.service';
import {DislikeService} from '../../service/dislike/dislike.service';

@Component({
  selector: 'app-card-video-details',
  templateUrl: './card-video-details.component.html',
  styleUrls: ['./card-video-details.component.css']
})
export class CardVideoDetailsComponent implements OnInit {
  @Input()
  videoId: number;

  video: VideoResponse = {};
  currentUserId: number;
  checkSubscriber: boolean;
  isLikeVideo: boolean;
  isDisLike: boolean;

  constructor(private videoService: VideoService,
              private authService: AuthService,
              private subscriberService: SubscriberService,
              private likeService: LikeService,
              private dislikeService: DislikeService) {
    this.currentUserId = this.authService.currentUserValue.id;

  }

  ngOnInit() {
    this.getVideoByVideoId();
    this.checkMember();
    this.checkLikeVideo(this.videoId, this.currentUserId);
    this.checkDisLikeVideo(this.videoId, this.currentUserId);
  }

  getVideoByVideoId() {
    this.videoService.getVideoByVideoId(this.videoId).subscribe((data) => {
      this.video = data;
    });
  }

  checkMember() {
    this.subscriberService.checkMember(this.video.user.id, this.currentUserId).subscribe((data) => {
      this.checkSubscriber = data.isSubscriber;
    });
  }

  addNewMember(userId: number, memberId: number) {
    this.subscriberService.addNewMember(userId, memberId).subscribe((data) => {
      this.getVideoByVideoId();
    });
  }


  addNewLike(videoId: number, userId: number) {
    this.likeService.addNewLike(videoId, userId).subscribe((data) => {
      this.getVideoByVideoId();
    });
  }

  checkLikeVideo(videoId: number, userId: number) {
    this.likeService.checkLikeVideo(videoId, userId).subscribe((data) => {
      this.isLikeVideo = data.isSubscriber;
    });
  }

  addNewDisLike(videoId: number, userId: number) {
    this.dislikeService.addNewDisLike(videoId, userId).subscribe((data) => {
      this.getVideoByVideoId();
    });
  }

  checkDisLikeVideo(videoId: number, userId: number) {
    this.dislikeService.checkDisLike(videoId, userId).subscribe((data) => {
      this.isDisLike = data.isSubscriber;
    });
  }
}
