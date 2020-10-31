import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { ResponseWithAccessToken } from '../model/response-with-access-token';
import { LocalStorageKey } from '../enum/local-storage-key';
import { LocalStorageService } from '../service/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLogined: boolean = false;

  constructor(private localStorage: LocalStorageService,
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

  set loginInfo(info: ResponseWithAccessToken<User>) {
    this.isLogined = true;
    this.accessToken = info.access_token;
  }

  public checkAccessTokenIsValid(): boolean {
    let token = this.accessToken;

    if(token) {
      let expiringDate = this.parseAccessToken(token)['exp'];
      if(expiringDate && Date.now() < expiringDate * 1000) return true;
    }
    return false;
  }
  
  public removeLocalStorage() {
    localStorage.clear();
  }

  public parseAccessToken (token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('')
      .map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

    return JSON.parse(jsonPayload);
  };

  public logout() {
    this.localStorage.removeLocalStorage(LocalStorageKey.AccessToken);
    this.isLogined = false;
    this.router.navigate(['/']);
  }
  
}
