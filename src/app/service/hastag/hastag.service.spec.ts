import { TestBed } from '@angular/core/testing';

import { HastagService } from './hastag.service';

describe('HastagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HastagService = TestBed.get(HastagService);
    expect(service).toBeTruthy();
  });
});
