import {Component, OnInit} from '@angular/core';
import {PlayListService} from '../../service/play-list/play-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {Playlist} from '../../model/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playListForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  currentUserId: number;
  playLists: Playlist[] = [];

  constructor(private playListService: PlayListService,
              private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllPlayListOfUserId();
  }

  createNewPlayList() {
    const playList = {
      name: this.playListForm.value.name,
      userId: this.currentUserId
    };
    this.playListService.createNewPlayList(playList).subscribe((data) => {
      alert('Tạo danh sách phát thành công!');
      this.playListForm.reset();
    });
  }

  getAllPlayListOfUserId() {
    this.playListService.getAllPlayListOfUser(this.currentUserId).subscribe((data) => {
      this.playLists = data;
    });
  }
}
