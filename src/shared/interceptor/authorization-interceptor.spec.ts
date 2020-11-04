import { TestBed } from '@angular/core/testing';

import { AuthorizationRequestInterceptor } from './authorization-request-interceptor';

describe('AuthorizationInterceptorService', () => {
  let service: AuthorizationRequestInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationRequestInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
