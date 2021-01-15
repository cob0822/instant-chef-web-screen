import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { OrderRequestComponent } from './order/request/order-request.component';
import { OrderListComponent } from './order/list/order-list.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path: 'order_request',
        component: OrderRequestComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order_list',
        component: OrderListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'menu',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
