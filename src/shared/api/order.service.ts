import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Order } from '../model/order';
import { Pagination } from '../model/pagination';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  public searchCategory(keyword: string): Observable<Category[]> {
    return this.http.get<Category[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }

  public createOrder(request: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', request);
  }

  public index(page?: number): Observable<Pagination<Order>> {
    page = page? page : 1;
    return this.http.get<Pagination<Order>>(`/api/orders?page=${page}`);
  }

  public show(order_id: number): Observable<Order> {
    return this.http.get<Order>(`/api/orders/detail/${order_id}`);
  }
}
