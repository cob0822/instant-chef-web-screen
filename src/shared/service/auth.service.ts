import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LocalStorageKey } from '../enum/local-storage-key';
import { LocalStorageService } from '../service/local-storage.service';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLogined: boolean = false;

  constructor(private localStorage: LocalStorageService,
              private user: UserService,
              private router: Router) { }

  get isLogined() {
    return this._isLogined;
  }

  set isLogined(status: boolean) {
    this._isLogined = status;
  }

  get accessToken(): string | null {
    return this.localStorage.getLocalStorage(LocalStorageKey.AccessToken);
  }

  set accessToken(token: string) {
    this.localStorage.setLocalStorage(LocalStorageKey.AccessToken, token);
  }

  public logout() {
    this.localStorage.removeLocalStorage(LocalStorageKey.AccessToken);
    this.user.removeUserName();
    this.isLogined = false;
    this.router.navigate(['/']);
  }
  
}
