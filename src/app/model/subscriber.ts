import {User} from './user';

export interface Subscriber {
  id?: number;

  member?: User;

  user?: User;
}
