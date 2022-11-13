import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WatchedVideo} from '../../model/watched-video';
const API_URL = `${environment.apiUrl}/watchedVideos`;
@Injectable({
  providedIn: 'root'
})
export class WatchedVideoService {

  constructor(private http: HttpClient) { }

  addNewWatchedVideo(videoId: number, userId: number): Observable<any> {
    return this.http.post(`${API_URL}/video/${videoId}/user/${userId}`, videoId);
  }
  getAllWatchedVideoOfUser(userId: number): Observable<WatchedVideo[]> {
    return this.http.get<WatchedVideo[]>(`${API_URL}/user/${userId}`);
  }
}
