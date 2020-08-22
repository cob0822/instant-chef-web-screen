import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(protected http: HttpClient) { }

  public signup(userInput: User): Observable<User> {
    return this.http.post<User>('/signup', {userInput});
  }

  public login(userInput: User): Observable<User> {
    return this.http.post<User>('/login', {userInput});
  }
}
