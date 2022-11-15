import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {User} from '../../model/user';
import {SubscriberService} from '../../service/subscriber/subscriber.service';
import {Subscriber} from '../../model/subscriber';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  currentUserId: number;
  studios: Subscriber[] = [];
  constructor(private authService: AuthService,
              private subscriberService: SubscriberService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllStudiosOfUser();
  }
  getAllStudiosOfUser() {
    this.subscriberService.getAllSubscribeOfUser(this.currentUserId).subscribe((data) => {
      this.studios = data;
    });
  }
}
