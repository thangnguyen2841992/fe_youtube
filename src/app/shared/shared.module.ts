import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';


@NgModule({
    declarations: [NavbarUserComponent, FooterComponent, SideBarComponent, NavbarHomeComponent],
  exports: [
    NavbarUserComponent,
    FooterComponent,
    SideBarComponent,
    NavbarHomeComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
