import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorizationResponseInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(resp => {
        if (resp instanceof HttpResponse) {
          console.log(resp)
        }
      }, error => {
        console.log(error);
      })
    )
  }
}
