import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/share.module';
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { PageService } from '../../shared/service/page.service';
import { OrderService as ApiOrderService } from '../../shared/api/order.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { JPDateAdapter } from '../../shared/adapter/jp-dateadapter';
import { provideHttpInterceptors } from '../../shared/interceptor/http-interceptors';

@NgModule({
  declarations: [
    IndexComponent, 
    OrderComponent,
  ],
  imports: [
    RecipeRoutingModule,
    CommonModule,
    ShareModule,
  ],
  providers: [
    PageService,
    ApiOrderService,
    provideHttpInterceptors(),
    {provide: MAT_DATE_LOCALE, useValue: JPDateAdapter}
  ]
})
export class RecipeModule { }
