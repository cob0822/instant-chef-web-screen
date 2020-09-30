import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  public searchCategory(keyword: string): Observable<{id: number, name: string}[]> {
    return this.http.get<{id: number, name: string}[]>('/api/orders/categories', {params: new HttpParams().set('keyword', keyword)});
  }
}
