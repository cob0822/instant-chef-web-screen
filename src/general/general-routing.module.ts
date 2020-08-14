import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipe/recipe-routing.module').then(m => m.RecipeRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
