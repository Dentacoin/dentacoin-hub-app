import { TestBed } from '@angular/core/testing';

import { AdditionalService } from './additional.service';

describe('AdditionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditionalService = TestBed.get(AdditionalService);
    expect(service).toBeTruthy();
  });
});
