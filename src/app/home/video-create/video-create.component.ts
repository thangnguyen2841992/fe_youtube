import {Component, Inject, OnInit} from '@angular/core';
import {Hastag} from '../../model/hastag';
import {HastagService} from '../../service/hastag/hastag.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {VideoService} from '../../service/video/video.service';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {
  hastags: Hastag[] = [];
  hastagDefault: Hastag = {
    id: 1,
    name: ''
  };
  videoFile: any;
  videoLink: string;
  currentUserId: number;

  constructor(private hastagService: HastagService,
              private authService: AuthService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private videoService: VideoService) {
    this.currentUserId = authService.currentUserValue.id;
  }

  videoForm: FormGroup = new FormGroup({
    hastag: new FormControl(this.hastagDefault.id, [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getAllHastag();
  }

  getAllHastag() {
    this.hastagService.getAll().subscribe((data) => {
      this.hastags = data;
    });
  }

  changeVideo(event) {
    this.videoFile = event.target.files[0];
  }

  createNewVideo() {
    const audioFile = this.getCurrentDateTime() + this.videoFile;
    const fileRef = this.storage.ref(audioFile);
    this.storage.upload(audioFile, this.videoFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.videoLink = url;
          const videoForm = {
            name: this.videoForm.value.name,

            url: this.videoLink,

            playListId: this.videoForm.value.playListId,


            hastagId: this.videoForm.value.hastag,

            userId : this.currentUserId
          };

          this.videoService.createNewVideo(videoForm).subscribe(() => {
            alert('Tạo video thành công!');
          });
        });
      })
    ).subscribe();
  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
