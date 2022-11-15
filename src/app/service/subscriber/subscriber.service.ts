import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscriber} from '../../model/subscriber';
import {Check} from '../../model/check';

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
  checkMember(userId: number, memberId: number): Observable<Check> {
    return this.http.post<Check>(`${API_URL}/checkMember/user/${userId}/member/${memberId}`, memberId);
  }
  unSubscriber(userId: number, memberId: number): Observable<Subscriber> {
    return this.http.delete(`${API_URL}/unSubscribe/user/${userId}/member/${memberId}`);
  }
  getAllSubscribeOfUser(memberId: number): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${API_URL}/member/${memberId}`);
  }
}
