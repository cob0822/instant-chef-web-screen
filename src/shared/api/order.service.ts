import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  public searchGenre(keyword: string): Observable<string[]> {
    return this.http.post<string[]>('/api/order/genre', {keyword: keyword});
  }
}
