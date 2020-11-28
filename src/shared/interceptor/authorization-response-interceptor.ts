import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthorizationResponseInterceptor implements HttpInterceptor {
  
  constructor(private auth: AuthService){}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(resp => {
        if (resp instanceof HttpResponse) {
          if(resp.headers.get('access_token')) this.auth.accessToken = resp.headers.get('access_token');
        }
      }, error => {
        console.log(error);
      })
    )
  }
}
