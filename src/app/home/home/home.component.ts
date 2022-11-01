import { Component, OnInit } from '@angular/core';
import {Video} from '../../model/video';
import {VideoService} from '../../service/video/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getAllVideo();
  }
  getAllVideo() {
    this.videoService.getAllVideo().subscribe((data) => {
      this.videos = data;
    });
  }
}
