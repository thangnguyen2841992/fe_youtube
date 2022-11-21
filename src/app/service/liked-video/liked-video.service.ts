import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LikedVideo} from '../../model/liked-video';

const API_URL = `${environment.apiUrl}/likedVideos`;

@Injectable({
  providedIn: 'root'
})
export class LikedVideoService {

  constructor(private http: HttpClient) {
  }

  getAllLikedVideoOfUser(userId: number): Observable<LikedVideo[]> {
    return this.http.get<LikedVideo[]>(`${API_URL}/user/${userId}`);
  }
  addNewLikedVideo(userId: number, videoId: number): Observable<LikedVideo> {
    return this.http.post(`${API_URL}/addLikedVideo/user/${userId}/video/${videoId}`, userId);
  }
}
