import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { User } from '../model/user';
import { WithAccessToken } from '../model/with-access-token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(protected http: HttpClient) { }

  public signup(userInput: User): Observable<WithAccessToken<User>> {
    return this.http.post<WithAccessToken<User>>('/api/signup', {userInput});
  }

  public login(userInput: User): Observable<WithAccessToken<User>> {
    return this.http.post<WithAccessToken<User>>('/api/auth/login', {userInput});
  }
}
