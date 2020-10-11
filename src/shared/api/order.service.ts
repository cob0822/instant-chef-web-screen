import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AuthService } from '../service/auth.service'
import { OrderRequest } from '../model/order-request';
import { RequestWithAccessToken } from '../model/request-with-access-token';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient,
              private auth: AuthService) { }

  public searchCategory(keyword: string): Observable<{id: number, name: string}[]> {
    return this.http.get<{id: number, name: string}[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }

  public createOrder(orderRequest: OrderRequest): Observable<OrderRequest> {
    let request: OrderRequest & RequestWithAccessToken = Object.assign({}, orderRequest, {access_token: this.auth.accessToken});
    return this.http.post<OrderRequest>('/api/orders', {request: request});
  }
}
