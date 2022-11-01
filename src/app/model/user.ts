import {Role} from './role';

export interface User {
  id?: number;

  username?: string;

  password?: string;

  email?: string;

  phone?: string;

  avatar?: string;

  dateCreated?: string;

  roles?: Role[];
}
