import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../model/user';
import { WithAccessToken } from '../model/with-access-token';
import { LocalStorageKey } from '../enum/local-storage-key';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLogined = new Subject<boolean>();

  constructor(private localStorage: LocalStorageService) { }

  get isLogined$(): Observable<boolean> {
    return this._isLogined.asObservable();
  }

  set isLogined(status: boolean) {
    this._isLogined.next(status);
  }

  get accessToken(): string | null {
    return this.localStorage.getLocalStorage(LocalStorageKey.AccessToken);
  }

  set accessToken(token: string) {
    this.localStorage.setLocalStorage(LocalStorageKey.AccessToken, token);
  }

  set loginInfo(info: WithAccessToken<User>) {
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
  }
  
}
