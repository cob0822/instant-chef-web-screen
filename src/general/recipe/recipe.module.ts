import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/share.module';
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [
    IndexComponent, 
    OrderComponent
  ],
  imports: [
    RecipeRoutingModule,
    CommonModule,
    ShareModule
  ]
})
export class RecipeModule { }
