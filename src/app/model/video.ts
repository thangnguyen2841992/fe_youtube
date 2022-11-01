import {Hastag} from './hastag';
import {User} from './user';
import {Playlist} from './playlist';

export interface Video {
  id?: number;

  name?: string;

  url?: string;

  dateCreated?: string;

  playList?: Playlist;

  hastag?: Hastag;

  user?: User;
}
