import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-watched-video',
  templateUrl: './watched-video.component.html',
  styleUrls: ['./watched-video.component.css']
})
export class WatchedVideoComponent implements OnInit {

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit() {
  }

}
