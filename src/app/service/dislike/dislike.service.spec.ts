import { TestBed } from '@angular/core/testing';

import { DislikeService } from './dislike.service';

describe('DislikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DislikeService = TestBed.get(DislikeService);
    expect(service).toBeTruthy();
  });
});
