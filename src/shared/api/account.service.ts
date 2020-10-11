import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { User } from '../model/user';
import { ResponseWithAccessToken } from '../model/response-with-access-token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(protected http: HttpClient) { }

  public signup(userInput: User): Observable<ResponseWithAccessToken<User>> {
    return this.http.post<ResponseWithAccessToken<User>>('/api/signup', {userInput});
  }

  public login(userInput: User): Observable<ResponseWithAccessToken<User>> {
    return this.http.post<ResponseWithAccessToken<User>>('/api/auth/login', {userInput});
  }
}
