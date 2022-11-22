import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StudioComponent } from './studio/studio.component';
import {SharedModule} from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [StudioComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
