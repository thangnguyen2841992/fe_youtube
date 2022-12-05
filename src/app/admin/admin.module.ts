import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StudioComponent } from './studio/studio.component';
import {SharedModule} from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';
import { NavStudioComponent } from './nav-studio/nav-studio.component';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
    declarations: [StudioComponent, SidebarComponent, NavbarComponent, NavStudioComponent, PlaylistComponent],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ]
})
export class AdminModule { }
