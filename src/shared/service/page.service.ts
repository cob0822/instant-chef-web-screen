import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  public isActive(type: string, url: string): boolean {
    return !!url.match(new RegExp(`.*${type}.*`));
  }
}
