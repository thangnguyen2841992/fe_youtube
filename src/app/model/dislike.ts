import {Video} from './video';
import {User} from './user';

export interface Dislike {
  id?: number;

  video?: Video;

  user?: User;

}
