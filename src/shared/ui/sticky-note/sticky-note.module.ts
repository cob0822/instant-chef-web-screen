import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyNoteComponent } from './sticky-note.component';
import { MatIconModule } from '@angular/material/icon';
import { StickyNoteDirective } from './sticky-note.directive';


@NgModule({
  declarations: [
    StickyNoteComponent,
    StickyNoteDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    StickyNoteComponent
  ]
})
export class StickyNoteModule { }
