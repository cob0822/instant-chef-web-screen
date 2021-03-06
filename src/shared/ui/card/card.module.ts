import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
