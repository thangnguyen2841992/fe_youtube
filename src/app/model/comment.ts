import {Video} from './video';
import {User} from './user';

export interface Comment {
  id?: number;

  content?: string;

  dateCreated?: string;

  video?: Video;

  user?: User;
}
