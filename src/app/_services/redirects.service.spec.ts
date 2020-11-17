import { TestBed } from '@angular/core/testing';

import { RedirectsService } from './redirects.service';

describe('RedirectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedirectsService = TestBed.get(RedirectsService);
    expect(service).toBeTruthy();
  });
});
