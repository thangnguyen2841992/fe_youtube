import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}/views`;

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) {
  }

  addNewView(viewForm): Observable<any> {
    return this.http.post(`${API_URL}`, viewForm);
  }
}
