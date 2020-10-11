import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { ResponseWithAccessToken } from '../model/response-with-access-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userName: string;

  constructor() { }

  get userName(): string {
    return this._userName;
  }

  set userName(name: string) {
    this._userName = name;
  }
  
  set userInfo(info: ResponseWithAccessToken<User>) {
    this.userName = info.user.name!;
  }

}
