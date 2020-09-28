import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enum/local-storage-key';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key: LocalStorageKey): string | null{
    let storage = localStorage.getItem(key)
    return storage? JSON.parse(storage) : null;
  }

  setLocalStorage(key: LocalStorageKey, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeLocalStorage(key: LocalStorageKey) {
    localStorage.removeItem(key);
  }
}
