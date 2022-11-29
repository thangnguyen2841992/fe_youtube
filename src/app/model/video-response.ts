import {Playlist} from './playlist';
import {Hastag} from './hastag';
import {User} from './user';

export interface VideoResponse {
  id?: number;

  name?: string;

  description?: string;

  url?: string;

  dateCreated?: string;

  playList?: Playlist;

  hastag?: Hastag;

  user?: User;

  totalSubscriber?: number;

  totalLike?: number;

  totalDisLike?: number;

  totalComment?: number;
  totalView?: number;

}
