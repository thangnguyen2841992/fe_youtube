import { Component, OnInit } from '@angular/core';
import {Hastag} from '../../model/hastag';
import {HastagService} from '../../service/hastag/hastag.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  hastags: Hastag[] = [];
  constructor(private hastagService: HastagService,
              private router: Router) { }

  ngOnInit() {
    this.getAllHastag();
  }
  getAllHastag() {
    this.hastagService.getAll().subscribe((data) => {
      this.hastags = data;
    });
  }
  reloadComponent(hastagId: number) {
    const currentUrl = `/hastag/${hastagId}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    if (hastagId === 1) {
      this.router.navigateByUrl('/home');
    }
  }
}
