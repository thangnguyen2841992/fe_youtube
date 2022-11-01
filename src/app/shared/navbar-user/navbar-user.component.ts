import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  loggedIn: boolean;
  currentUserId: number;
  user: User;
  constructor(private authService: AuthService,
              private userService: UserService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.checkLogin();
    this.getUserByUserId();
  }
  checkLogin() {
    this.loggedIn = this.authService.isLoggedIn();
  }
  getUserByUserId() {
    this.userService.getUserById(this.currentUserId).subscribe((data) => {
        this.user = data;
    });
  }
  logout() {
    this.authService.logout();
  }
}
