import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../shared/api/order.service';
import { Order } from '../../../../shared/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public orders: Order[] = [];
  public currentPage: number;

  constructor(private order: OrderService) {}

  ngOnInit(): void {
    this.load();
  }

  public load(page: number = 1) {
    this.currentPage = page;
    this.order.index(page).subscribe(response => {
      console.log(response);
    });
  }

}
