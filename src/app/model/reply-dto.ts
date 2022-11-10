import {User} from './user';

export interface ReplyDto {
  id?: number;

  content?: string;

  dateCreated?: string;


  comment?: Comment;

  user?: User;
}
