import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { VideoCreateComponent } from './video-create/video-create.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {AngularFireStorage} from '@angular/fire/storage';
import { TestComponent } from './test/test.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


@NgModule({
  declarations: [HomeComponent, VideoCreateComponent, TestComponent, VideoDetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AngularFireStorage
  ],
})
export class HomeModule { }
