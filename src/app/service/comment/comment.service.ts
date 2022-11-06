import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CommentDTO} from '../../model/comment-dto';

const API_URL = `${environment.apiUrl}/comments`;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  createNewComment(commentForm): Observable<any> {
    return this.http.post(`${API_URL}`, commentForm);
  }

  getCommentOfVideo(videoId: number): Observable<CommentDTO[]> {
    return this.http.get<CommentDTO[]>(`${API_URL}/video/${videoId}`);
  }
}
