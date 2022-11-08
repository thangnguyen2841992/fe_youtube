import {Video} from './video';
import {User} from './user';

export interface CommentDTO {
  id?: number;

  content?: string;

  dateCreated?: string;

  video?: Video;

  user?: User;

  totalLike?: number;

  totalDislike?: number;
}
