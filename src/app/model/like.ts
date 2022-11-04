import {Video} from './video';
import {User} from './user';

export interface Like {
  id?: number;

  video?: Video;

  user?: User;
}
