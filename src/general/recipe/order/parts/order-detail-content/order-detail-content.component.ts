import { Component, OnInit, Input } from '@angular/core';
import { OrderRequest } from '../../../../../shared/model/order';
import { OrderDateType, getOrderDateTypeLabel } from '../../../../../shared/enum/order-date-type';
import { getOrderFrequencyTypeLabel } from '../../../../../shared/enum/order-frequency-type';

@Component({
  selector: 'parts-order-detail-content',
  templateUrl: './order-detail-content.component.html',
  styleUrls: ['./order-detail-content.component.scss']
})
export class OrderDetailContentComponent implements OnInit {

  @Input('value') public value: OrderRequest;

  constructor() { }

  OrderDateTypeEnum = OrderDateType;
  _getOrderDateTypeLabel = getOrderDateTypeLabel;
  _getOrderFrequencyTypeLabel = getOrderFrequencyTypeLabel;

  ngOnInit(): void {
  }

}
