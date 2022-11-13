import { TestBed } from '@angular/core/testing';

import { LikeReplyService } from './like-reply.service';

describe('LikeReplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikeReplyService = TestBed.get(LikeReplyService);
    expect(service).toBeTruthy();
  });
});
