import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { IndexComponent } from './index/index.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule
  ],
})
export class GeneralModule { }
