import { TestBed } from '@angular/core/testing';

import { LikedVideoService } from './liked-video.service';

describe('LikedVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikedVideoService = TestBed.get(LikedVideoService);
    expect(service).toBeTruthy();
  });
});
