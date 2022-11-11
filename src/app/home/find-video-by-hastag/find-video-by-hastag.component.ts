import {Component, OnInit} from '@angular/core';
import {VideoResponse} from '../../model/video-response';
import {VideoService} from '../../service/video/video.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {HastagService} from '../../service/hastag/hastag.service';
import {Hastag} from '../../model/hastag';

@Component({
  selector: 'app-find-video-by-hastag',
  templateUrl: './find-video-by-hastag.component.html',
  styleUrls: ['./find-video-by-hastag.component.css']
})
export class FindVideoByHastagComponent implements OnInit {
  videos: VideoResponse[] = [];
  hastagId: number;
  currentUserId: number;
  hastag: Hastag = {};

  constructor(private videoService: VideoService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private hastagService: HastagService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.hastagId = +paramMap.get('hastagId');
      this.currentUserId = this.authService.currentUserValue.id;
    });
  }

  ngOnInit() {
    this.getAllVideoByHastag();
    this.getHastagById();
  }

  getAllVideoByHastag() {
    this.videoService.getAllVideoByHastag(this.currentUserId, this.hastagId).subscribe((data) => {
      this.videos = data;
    });
  }
  getHastagById() {
    this.hastagService.getById(this.hastagId).subscribe((data) => {
      this.hastag = data;
    });
  }
}
