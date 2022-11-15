import {Component, OnInit} from '@angular/core';
import {VideoResponse} from '../../model/video-response';
import {VideoService} from '../../service/video/video.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  videos: VideoResponse[] = [];
  name: string;
  isNoContent = false;

  constructor(private videoService: VideoService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.name = paramMap.get('name');
    });
  }

  ngOnInit() {
    this.searchByName();
  }

  searchByName() {
    this.videoService.searchByName(this.name).subscribe((data) => {
      this.videos = data;
      if (this.videos.length === 0) {
        this.isNoContent = true;
      }
    });
  }
}
