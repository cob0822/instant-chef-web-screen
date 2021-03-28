import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { OrderRequest, OrderResponse } from '../model/order';
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

  public index(page: number, isDesc: boolean): Observable<Pagination<OrderResponse>> {
    page = page? page : 1;
    const sort =  isDesc? 'desc' : 'asc';
    return this.http.get<Pagination<OrderResponse>>(`/api/orders?page=${page}`, {params: new HttpParams().set('sort', sort)});
  }

  public show(order_id: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`/api/orders/detail/${order_id}`);
  }
}
