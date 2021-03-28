import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../shared/api/order.service';
import { Order } from '../../../../shared/model/order';
import { Pagination } from '../../../../shared/model/pagination';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public orders: Pagination<Order>;
  public currentPage: number;
  public isLoading: boolean = false;
  public _isDesc: boolean = true;

  get isDesc(): boolean {
    return this._isDesc;
  }

  set isDesc(order: boolean) {
    this._isDesc = order;
  }

  constructor(private order: OrderService) {}

  ngOnInit(): void {
    this.load();
  }

  public load(page: number = 1): void {
    this.currentPage = page;
    this.isLoading = true;
    this.order.index(page, this.isDesc).subscribe(response => {
      this.orders = response;
      this.isLoading = false;
    });
  }

  public isSort(): void {
    this.isDesc = !this.isDesc;
    this.load();
  }

}
