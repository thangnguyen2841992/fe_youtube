import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {VideoService} from '../../service/video/video.service';
import {VideoResponse} from '../../model/video-response';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  videoId: number;
  video: VideoResponse = {};
  videoLink: string;

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.videoId = +paramMap.get('videoId');
      this.getVideoByVideoId();
      this.videoLink = this.video.url;
    });
  }

  ngOnInit() {
  }

  getVideoByVideoId() {
    this.videoService.getVideoByVideoId(this.videoId).subscribe((data) => {
      this.video = data;
      console.log(data.url);
    });
  }
}
