import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  public isActive(type: string, url: string, isPerfect: boolean = false): boolean {
    if(!isPerfect) return !!url.match(new RegExp(`^.*${type}.*$`));
    return !!url.match(new RegExp(`^.*${type}$`));
  }
}
