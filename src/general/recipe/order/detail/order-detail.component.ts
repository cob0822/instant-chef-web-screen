import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../shared/api/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private order: OrderService) { }
  
  private order_id: number;

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      param => {
        this.order_id = param.id
        console.log(this.order_id);
        this.order.show(this.order_id).subscribe(
          res => {
              console.log(res);
          });
        });
  }

}
