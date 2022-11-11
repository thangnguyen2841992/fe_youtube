import { TestBed } from '@angular/core/testing';

import { WatchedVideoService } from './watched-video.service';

describe('WatchedVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatchedVideoService = TestBed.get(WatchedVideoService);
    expect(service).toBeTruthy();
  });
});
