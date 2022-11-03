import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscriber} from '../../model/subscriber';
import {CheckSubscriber} from '../../model/check-subscriber';

const API_URL = `${environment.apiUrl}/subscribers`;

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) {
  }

  addNewMember(userId: number, memberId: number): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${API_URL}/addMember/user/${userId}/member/${memberId}`, memberId);
  }
  checkMember(userId: number, memberId: number): Observable<CheckSubscriber> {
    return this.http.post<CheckSubscriber>(`${API_URL}/checkMember/user/${userId}/member/${memberId}`, memberId);
  }
}
