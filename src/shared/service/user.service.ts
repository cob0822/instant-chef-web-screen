import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { ResponseWithAccessToken } from '../model/response-with-access-token';
import { LocalStorageKey } from '../enum/local-storage-key';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorage: LocalStorageService) { }

  get userName(): string | null {
    return this.localStorage.getLocalStorage(LocalStorageKey.UserName);
  }

  set userName(token: string) {
    this.localStorage.setLocalStorage(LocalStorageKey.UserName, token);
  }
  
  set userInfo(info: ResponseWithAccessToken<User>) {
    this.userName = info.user.name!;
  }

}
