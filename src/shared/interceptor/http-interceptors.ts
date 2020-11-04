import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationRequestInterceptor } from './authorization-request-interceptor';
import { AuthorizationResponseInterceptor } from './authorization-response-interceptor';

export function provideHttpInterceptors() {
  return [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationResponseInterceptor, multi: true },
  ];
}