import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { OrderComponent } from './order/order.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent,
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
