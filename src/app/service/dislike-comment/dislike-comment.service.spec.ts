import { TestBed } from '@angular/core/testing';

import { DislikeCommentService } from './dislike-comment.service';

describe('DislikeCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DislikeCommentService = TestBed.get(DislikeCommentService);
    expect(service).toBeTruthy();
  });
});
