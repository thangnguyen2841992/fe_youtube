import {VideoResponse} from './video-response';
import {User} from './user';

export interface WatchedVideo {
  id?: number;

  watchedTime?: string;


  video?: VideoResponse;

  user?: User;
}
