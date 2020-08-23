import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { IndexComponent } from './index/index.component';

import { UserComponent } from './user/user.component';
import { RecipeComponent } from './recipe/recipe.component';
 
@NgModule({
  declarations: [
    GeneralComponent,
    IndexComponent,
    UserComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    GeneralRoutingModule,
  ],
  exports: [
    ShareModule,
  ]
})
export class GeneralModule { }
