import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  public searchCategory(keyword: string): Observable<{id: number, name: string}[]> {
    return this.http.get<{id: number, name: string}[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }

  public createOrder(request: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', request);
  }
}
