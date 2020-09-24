import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(protected http: HttpClient) { }

  public searchGenre(keyword: string): Observable<string[]> {
    let param = new HttpParams().set('keyword', keyword);
    return this.http.get<string[]>('/api/orders', {params: param});
  }
}
