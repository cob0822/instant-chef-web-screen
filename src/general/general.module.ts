import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { IndexComponent } from './index/index.component';

import { UserComponent } from './user/user.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PageService } from '../shared/service/page.service';
 
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
  providers: [
    PageService
  ],
  exports: [
    ShareModule,
  ]
})
export class GeneralModule { }
