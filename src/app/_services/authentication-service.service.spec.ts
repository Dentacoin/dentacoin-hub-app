import { TestBed } from '@angular/core/testing';

import { AuthenticationServiceService } from './authentication-service.service';

describe('AuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationServiceService = TestBed.get(AuthenticationServiceService);
    expect(service).toBeTruthy();
  });
});
