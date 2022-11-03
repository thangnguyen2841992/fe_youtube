import {Component, OnInit} from '@angular/core';
import {Video} from '../../model/video';
import {VideoService} from '../../service/video/video.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  videos: Video[] = [];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
  }

}
