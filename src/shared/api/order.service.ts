import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { OrderRequest, OrderList } from '../model/order';
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

  public createOrder(request: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>('/api/orders', request);
  }

  public index(page?: number): Observable<Pagination<OrderList>> {
    page = page? page : 1;
    return this.http.get<Pagination<OrderList>>(`/api/orders?page=${page}`);
  }

  public show(order_id: number): Observable<any> {
    return this.http.get<any>(`/api/orders/detail?id=${order_id}`);
  }
}
