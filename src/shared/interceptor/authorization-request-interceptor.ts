import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthorizationRequestInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService){}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.auth.accessToken}`)
    })
    return next.handle(newReq)
  }
}
