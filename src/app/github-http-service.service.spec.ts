import { TestBed } from '@angular/core/testing';

import { GithubHttpServiceService } from './github-http-service.service';

describe('GithubHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubHttpServiceService = TestBed.get(GithubHttpServiceService);
    expect(service).toBeTruthy();
  });
});
