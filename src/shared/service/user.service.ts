import { Injectable } from '@angular/core';
import { User } from '../model/user';
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

  public removeUserName() {
    this.localStorage.removeLocalStorage(LocalStorageKey.UserName);
  }

}
