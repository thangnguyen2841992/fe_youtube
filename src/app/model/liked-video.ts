import {VideoResponse} from './video-response';
import {User} from './user';

export interface LikedVideo {
  id?: number;

  likedTime?: string;


  video?: VideoResponse;

  user?: User;
}
