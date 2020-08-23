import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { OrderComponent } from './order/order.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent
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
