import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { OrderRequest } from '../model/order-request';
import { LocalStorageService } from '../service/local-storage.service';
import { LocalStorageKey } from '../enum/local-storage-key';
import { RequestWithAccessToken } from '../model/request-with-access-token';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient,
              private localStorage: LocalStorageService) { }

  public searchCategory(keyword: string): Observable<{id: number, name: string}[]> {
    return this.http.get<{id: number, name: string}[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }

  public createOrder(orderRequest: OrderRequest): Observable<OrderRequest> {
    let request: OrderRequest & RequestWithAccessToken = Object.assign({}, orderRequest, {access_token: this.localStorage.getLocalStorage(LocalStorageKey.AccessToken)});
    return this.http.post<OrderRequest>('/api/orders', {request: request});
  }
}
