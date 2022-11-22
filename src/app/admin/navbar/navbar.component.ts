import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  currentUserId = 0;
  user: User = {};
  name = '';
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(this.name, [Validators.required])
  });
  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
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

  changeName(event) {
    this.name = event.target.value;
    this.searchForm.patchValue({
      name: this.name
    });
    console.log(this.name);
  }

  goToSearch() {
    this.router.navigateByUrl(`/searchByName/${this.name}`);
    this.reloadComponent();
    this.searchForm.patchValue({
      name: this.name
    });
  }

  reloadComponent() {
    const currentUrl = `/searchByName/${this.name}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
