import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Like} from '../../model/like';
import {Check} from '../../model/check';

const API_URL = `${environment.apiUrl}/likes`;

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) {
  }

  addNewLike(videoId: number, userId: number): Observable<Like> {
    return this.http.post<Like>(`${API_URL}/video/${videoId}/user/${userId}`, videoId);
  }
  checkLikeVideo(videoId: number, userId: number): Observable<Check> {
    return this.http.post<Check>(`${API_URL}/checkLike/video/${videoId}/user/${userId}`, videoId);
  }
}
