import {Injectable} from '@angular/core';
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

  constructor(private http: HttpClient) {
  }

  getAllVideoCreatedOfUser(userId: number): Observable<VideoResponse[]> {
    return  this.http.get<VideoResponse[]>(`${API_URL}/user/${userId}`);
  }

  getAllVideo(userId: number): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}/all/user/${userId}`);
  }

  getAllVideoByHastag(userId: number, hastagId: number): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}/hastag/${hastagId}/user/${userId}`);
  }

  getAllVideoOtherUserOtherVideo(userId: number, videoId: number): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}/user/${userId}/video/${videoId}`);
  }

  getVideoByVideoId(videoId: number): Observable<VideoResponse> {
    return this.http.get<VideoResponse>(`${API_URL}/video/${videoId}`);
  }

  getUrlByVideoId(videoId: number): Observable<string> {
    return this.http.get<string>(`${API_URL}/url/video/${videoId}`);
  }

  createNewVideo(videoForm): Observable<Video> {
    return this.http.post<Video>(`${API_URL}`, videoForm);
  }

  getVideoByVideoID1(videoId: number): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}/test/video/${videoId}`);
  }

  searchByName(q: string): Observable<VideoResponse[]> {
    return this.http.get<VideoResponse[]>(`${API_URL}/searchByName?q=${q}`);
  }
  deleteListVideo(videoIds: number[]): Observable<any> {
    return this.http.post(`${API_URL}/deleteVideo`, videoIds);
  }
}
