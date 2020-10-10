import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';
import { PopUpModule } from './pop-up/pop-up.module';
import { ListModule } from './list/list.module';
import { StickyNoteModule } from './sticky-note/sticky-note.module';
import { SpinnerModule } from './spinner/spinner.module';
import { CloneInputFormModule } from './clone-input-form/clone-input-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoardModule,
    CardModule,
    PopUpModule,
    ListModule,
    StickyNoteModule,
    SpinnerModule,
    CloneInputFormModule
  ],
  exports: [
    BoardModule,
    CardModule,
    PopUpModule,
    ListModule,
    StickyNoteModule,
    SpinnerModule,
    CloneInputFormModule
  ]
})
export class UiModule { }
