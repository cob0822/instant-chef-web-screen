import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/share.module';
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { PageService } from '../../shared/service/page.service';
import { OrderService as ApiOrderService } from '../../shared/api/order.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { JPDateAdapter } from '../../shared/other/jp-dateadapter';

@NgModule({
  declarations: [
    IndexComponent, 
    OrderComponent
  ],
  imports: [
    RecipeRoutingModule,
    CommonModule,
    ShareModule,
  ],
  providers: [
    PageService,
    ApiOrderService,
    {provide: MAT_DATE_LOCALE, useValue: JPDateAdapter}
  ]
})
export class RecipeModule { }
