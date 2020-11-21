import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ TagComponent ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TagComponent
  ]
})
export class TagModule { }
