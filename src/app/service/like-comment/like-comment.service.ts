import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Check} from '../../model/check';
import {IsLikeComment} from '../../model/is-like-comment';
const API_URL = `${environment.apiUrl}/likeComments`;
@Injectable({
  providedIn: 'root'
})
export class LikeCommentService {

  constructor(private http: HttpClient) { }

  addNewLikeComment(commentId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${API_URL}/addLikeComment/comment/${commentId}/user/${userId}`, commentId);
  }
  checkLikeComment(commentId: number, userId: number): Observable<IsLikeComment> {
    return this.http.post<IsLikeComment>(`${API_URL}/checkLike/comment/${commentId}/user/${userId}`, commentId);
  }
}
