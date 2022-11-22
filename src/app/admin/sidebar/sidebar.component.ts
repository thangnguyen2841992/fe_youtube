import { Component, OnInit } from '@angular/core';
import {Subscriber} from '../../model/subscriber';
import {AuthService} from '../../service/auth/auth.service';
import {SubscriberService} from '../../service/subscriber/subscriber.service';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User = {};
  currentUserId: number;
  studios: Subscriber[] = [];
  constructor(private authService: AuthService,
              private subscriberService: SubscriberService,
              private userService: UserService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllStudiosOfUser();
    this.getUserByUserId();
  }
  getAllStudiosOfUser() {
    this.subscriberService.getAllSubscribeOfUser(this.currentUserId).subscribe((data) => {
      this.studios = data;
    });
  }
  getUserByUserId() {
    this.userService.getUserById(this.currentUserId).subscribe((data) => {
      this.user = data;
    });
  }
}
