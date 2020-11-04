import { TestBed } from '@angular/core/testing';

import { AuthorizationResponseInterceptor } from './authorization-response-interceptor';

describe('AuthorizationResponseInterceptor', () => {
  let service: AuthorizationResponseInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationResponseInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
