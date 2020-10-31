import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AuthService } from '../service/auth.service'
import { OrderRequest } from '../model/order-request';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient,
              private auth: AuthService) { }

  public searchCategory(keyword: string): Observable<{id: number, name: string}[]> {
    return this.http.get<{id: number, name: string}[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }

  public createOrder(request: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>('/api/orders', request);
  }
}
