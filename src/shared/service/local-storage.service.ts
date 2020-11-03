import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enum/local-storage-key';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getLocalStorage(key: LocalStorageKey): string | null{
    let storage = localStorage.getItem(key)
    return storage? JSON.parse(storage) : null;
  }

  public setLocalStorage(key: LocalStorageKey, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeLocalStorage(key: LocalStorageKey) {
    localStorage.removeItem(key);
  }

  public allRemoveLocalStorage() {
    localStorage.clear();
  }

  public checkAccessTokenIsValid(key: LocalStorageKey): boolean {
    let token = this.getLocalStorage(key);

    if(token) {
      let expiringDate = this.parseAccessToken(token)['exp'];
      if(expiringDate && Date.now() < expiringDate * 1000) return true;
    }
    return false;
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
}
