import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';

const API_URL = `${environment.apiUrl}/playLists`;

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  constructor(private http: HttpClient) {
  }
  getAllPlayListOfUser(userId: number): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${API_URL}/user/${userId}`);
  }
  createNewPlayList(playList): Observable<Playlist> {
    return this.http.post<Playlist>(`${API_URL}`, playList);
  }
}
