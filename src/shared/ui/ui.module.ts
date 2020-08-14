import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';
import { PopUpModule } from './pop-up/pop-up.module';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoardModule,
    CardModule,
    PopUpModule,
    ListModule
  ],
  exports: [
    BoardModule,
    CardModule,
    PopUpModule,
    ListModule
  ]
})
export class UiModule { }
