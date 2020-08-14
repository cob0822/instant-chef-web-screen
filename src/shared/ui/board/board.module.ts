import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BoardComponent,
  ]
})
export class BoardModule { }
