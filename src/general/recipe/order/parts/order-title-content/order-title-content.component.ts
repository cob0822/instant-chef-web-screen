import { Component, OnInit, Input } from '@angular/core';
import { OrderDateType, getOrderDateTypeLabel } from '../../../../../shared/enum/order-date-type';
import { Category } from '../../../../../shared/model/category';
import { UserService } from '../../../../../shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'parts-order-title-content',
  templateUrl: './order-title-content.component.html',
  styleUrls: ['./order-title-content.component.scss']
})
export class OrderTitleContentComponent implements OnInit {

  @Input('desired_date') public desiredDate: string | OrderDateType;
  @Input('categories') public categories: Category[];
  @Input('name') public name: string;
  @Input('type') public type: string = 'detail';
  @Input('order_id') private order_id: number = 1;

  constructor(readonly user: UserService,
              readonly router: Router) { }

  public OrderDateTypeEnum = OrderDateType;
  public _getOrderDateTypeLabel = getOrderDateTypeLabel;

  ngOnInit(): void {
  }

  public trasition() {
    this.router.navigate(['recipes/order_detail/'], {queryParams: {id: this.order_id}});
  }

}
