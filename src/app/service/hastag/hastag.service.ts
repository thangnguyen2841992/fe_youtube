import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hastag} from '../../model/hastag';

const API_URL = `${environment.apiUrl}/hastags`;

@Injectable({
  providedIn: 'root'
})
export class HastagService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Hastag[]> {
    return this.http.get<Hastag[]>(`${API_URL}`);
  }
  getById(hastagId: number): Observable<Hastag> {
    return this.http.get<Hastag>(`${API_URL}/${hastagId}`);
  }
}
