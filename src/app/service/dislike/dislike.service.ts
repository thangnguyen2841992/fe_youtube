import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dislike} from '../../model/dislike';
import {Check} from '../../model/check';

const API_URL = `${environment.apiUrl}/dislikes`;

@Injectable({
  providedIn: 'root'
})
export class DislikeService {

  constructor(private http: HttpClient) {
  }

  addNewDisLike(videoId: number, userId: number): Observable<Dislike> {
    return this.http.post<Dislike>(`${API_URL}/video/${videoId}/user/${userId}`, videoId);
  }

  checkDisLike(videoId: number, userId: number): Observable<Check> {
    return this.http.post<Check>(`${API_URL}/checkDisLike/video/${videoId}/user/${userId}`, videoId);
  }
}
