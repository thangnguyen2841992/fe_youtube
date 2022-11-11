import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}/likeReplies`;
@Injectable({
  providedIn: 'root'
})
export class LikeReplyService {

  constructor(private http: HttpClient) { }

  addNewLikeReply(replyId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${API_URL}/addLikeReply/reply/${replyId}/user/${userId}`, replyId);
  }
}
