import { TestBed } from '@angular/core/testing';

import { PostsdataService } from './postsdata.service';

describe('PostsdataService', () => {
  let service: PostsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
