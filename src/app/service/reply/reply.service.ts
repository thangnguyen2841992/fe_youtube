import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}/replies`;

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http: HttpClient) {
  }

  addNewReply(replyForm): Observable<any> {
   return  this.http.post(`${API_URL}`, replyForm);
  }
}
