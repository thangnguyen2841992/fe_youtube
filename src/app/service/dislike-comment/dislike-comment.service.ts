import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}/dislikeComments`;
@Injectable({
  providedIn: 'root'
})
export class DislikeCommentService {

  constructor(private http: HttpClient) { }
  addNewDisLikeComment(commentId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${API_URL}/addDislikeComment/comment/${commentId}/user/${userId}`, commentId);
  }
}
