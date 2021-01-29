import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTagComponent } from './category-tag/category-tag.component';
import { MatIconModule } from '@angular/material/icon';
import { UserTagComponent } from './user-tag/user-tag.component';
import { EdgeTagComponent } from './edge-tag/edge-tag.component';

@NgModule({
  declarations: [ 
    CategoryTagComponent, 
    UserTagComponent, 
    EdgeTagComponent 
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CategoryTagComponent,
    UserTagComponent,
    EdgeTagComponent
  ]
})
export class TagModule { }
