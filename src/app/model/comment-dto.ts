import {Video} from './video';
import {User} from './user';
import {ReplyDto} from './reply-dto';

export interface CommentDTO {
  id?: number;

  content?: string;

  dateCreated?: string;

  video?: Video;

  user?: User;

  totalLike?: number;

  totalDislike?: number;

  replyDTOList?: ReplyDto[];

  listUserLikes?: User[];
}
