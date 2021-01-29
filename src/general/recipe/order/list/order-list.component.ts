import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../shared/api/order.service';
import { OrderList } from '../../../../shared/model/order';
import { Pagination } from '../../../../shared/model/pagination';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public orders: Pagination<OrderList>;
  public currentPage: number;
  public isLoading: boolean = false;

  constructor(private order: OrderService) {}

  ngOnInit(): void {
    this.load();
  }

  public load(page: number = 1): void {
    this.currentPage = page;
    this.isLoading = true;
    this.order.index(page).subscribe(response => {
      this.orders = response;
      this.isLoading = false;
    });
  }

}
