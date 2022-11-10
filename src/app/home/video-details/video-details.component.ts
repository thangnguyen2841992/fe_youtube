import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';
import {AuthService} from '../../service/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubscriberService} from '../../service/subscriber/subscriber.service';
import {LikeService} from '../../service/like/like.service';
import {DislikeService} from '../../service/dislike/dislike.service';
import {CommentService} from '../../service/comment/comment.service';
import {CommentDTO} from '../../model/comment-dto';
import {LikeCommentService} from '../../service/like-comment/like-comment.service';
import {DislikeCommentService} from '../../service/dislike-comment/dislike-comment.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';
import {ShowReplyComment} from '../../model/show-reply-comment';
import {ReplyService} from '../../service/reply/reply.service';
import {ShowAllReplyComment} from '../../model/show-all-reply-comment';
import {CheckLikeComment} from '../../model/check-like-comment';

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
  // isLikeComment: CheckLikeComment = {
  //
  // }
  // isDisLikeComment = false;
  videoUrl: string;
  isShowButton = false;
  commentForm: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]),
  });
  replyForm: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]),
  });
  comments: CommentDTO[] = [];
  user: User = {};
  videos1: VideoResponse[] = [];
  isPlayVideo = false;
  isShowReply: ShowReplyComment = {};
  isShowButtonReply = false;
  isShowAllReply: ShowAllReplyComment = {
    commentId: 0,
    isShowAllReply: false
  };

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService,
              private authService: AuthService,
              private router: Router,
              private subscriberService: SubscriberService,
              private likeService: LikeService,
              private disLikeService: DislikeService,
              private commentService: CommentService,
              private likeCommentService: LikeCommentService,
              private dislikeCommentService: DislikeCommentService,
              private userService: UserService,
              private replyService: ReplyService) {
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
    this.getVideoByVIdeoId();
    this.getAllVideoOtherUser();
    this.getCommentOfVideo();
    this.getUserByUserId();
    this.getVideoByVideoId(this.videoId);

  }

  playPause() {
    const myVideo: any = document.getElementById('videoPlayer');
    if (myVideo.paused) {
      myVideo.play();
      this.isPlayVideo = true;
    } else {
      myVideo.pause();
      this.isPlayVideo = false;
    }
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

  createNewComment() {
    const commentForm = {
      content: this.commentForm.value.content,
      videoId: this.videoId,
      userId: this.currentUserId
    };
    this.commentService.createNewComment(commentForm).subscribe((data) => {
      this.commentForm.reset();
      this.getCommentOfVideo();
    });
  }

  getCommentOfVideo() {
    this.commentService.getCommentOfVideo(this.videoId).subscribe((data) => {
      this.comments = data;
    });
  }

  addNewLikeComment(commentId: number, userId: number) {
    this.likeCommentService.addNewLikeComment(commentId, userId).subscribe((data) => {
      this.commentForm.reset();
      this.getCommentOfVideo();
    });
  }

  addNewDisLikeComment(commentId: number, userId: number) {
    this.dislikeCommentService.addNewDisLikeComment(commentId, userId).subscribe((data) => {
      this.getCommentOfVideo();
    });
  }

  getUserByUserId() {
    this.userService.getUserById(this.currentUserId).subscribe((data) => {
      this.user = data;
    });
  }

  hiddenFormComment() {
    this.isShowButton = false;
  }

  checkLikeComment(commentId: number, userId: number) {
    this.likeCommentService.checkLikeComment(commentId, userId).subscribe((data) => {
    });
  }

  getVideoByVIdeoId() {
    this.videoService.getVideoByVideoID1(this.videoId).subscribe((data) => {
      this.videos1 = data;
    });
  }


  checkIsPlayVideo() {
    this.isPlayVideo = false;
  }

  checkVideoEnd() {
    this.isPlayVideo = false;
  }

  displayFormReply(commentId: number) {
    this.isShowReply = {
      commentId,
      isShowReply: true
    };
    console.log(this.isShowReply);
  }

  showButtonReply() {
    this.isShowButtonReply = true;
  }

  hiddenButtonReply(commentId: number) {
    this.isShowButtonReply = false;
    this.isShowReply = {
      commentId,
      isShowReply: false
    };
  }

  addNewReply(commentId: number) {
    const replyForm = {
      content: this.replyForm.value.content,

      commentId,

      userId: this.currentUserId
    };
    this.replyService.addNewReply(replyForm).subscribe((data) => {
      this.replyForm.reset();
      this.getCommentOfVideo();
    });
  }

  showAllReply(commentId: number) {
    if (commentId !== this.isShowAllReply.commentId) {
      this.isShowAllReply = {
        commentId,
        isShowAllReply: true
      };
    } else {
      this.isShowAllReply = {
        isShowAllReply: !this.isShowAllReply.isShowAllReply
      };
    }
  }
}
