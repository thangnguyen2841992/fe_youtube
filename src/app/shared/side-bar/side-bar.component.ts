import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  currentUserId: number;
  constructor(private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
  }

}
