import {VideoResponse} from './video-response';
import {User} from './user';

export interface LikedVideo {
  id?: number;

  likedVideoTime?: string;


  video?: VideoResponse;

  user?: User;
}
