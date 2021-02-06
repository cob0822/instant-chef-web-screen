import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../shared/api/order.service';
import { Order } from '../../../../shared/model/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private order: OrderService) { }
  
  private order_id: number;
  public orderDetail: Order;
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.router.queryParams.subscribe(
      param => {
        this.order_id = param.id
        this.order.show(this.order_id).subscribe(
          res => {
            this.orderDetail = res;
            console.log(this.orderDetail);
            this.isLoading = false;
          });
        });
  }

}
