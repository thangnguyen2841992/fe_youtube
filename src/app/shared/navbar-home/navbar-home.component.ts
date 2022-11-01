import { Component, OnInit } from '@angular/core';
import {Hastag} from '../../model/hastag';
import {HastagService} from '../../service/hastag/hastag.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  hastags: Hastag[] = [];
  constructor(private hastagService: HastagService) { }

  ngOnInit() {
    this.getAllHastag();
  }
  getAllHastag() {
    this.hastagService.getAll().subscribe((data) => {
      this.hastags = data;
    });
  }
}
