import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../../model/video';
import {VideoResponse} from '../../model/video-response';
const API_URL = `${environment.apiUrl}/videos`;
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getAllVideo(): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}`);
  }
  getVideoByVideoId(videoId: number): Observable<VideoResponse> {
    return this.http.get<VideoResponse>(`${API_URL}/video/${videoId}`);
  }
  createNewVideo(videoForm): Observable<Video> {
    return this.http.post<Video>(`${API_URL}`, videoForm);
  }
}
