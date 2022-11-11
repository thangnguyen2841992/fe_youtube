import {User} from './user';

export interface ReplyDto {
  id?: number;

  content?: string;

  dateCreated?: string;

  totalLike?: number;

  comment?: Comment;

  user?: User;
}
