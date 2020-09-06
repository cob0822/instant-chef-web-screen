import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddGenreDialogComponent } from './add-genre-dialog/add-genre-dialog.component';
import { AddGenreDialogService } from './add-genre-dialog/add-genre-dialog.service';

@NgModule({
  declarations: [
    AddGenreDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [
    AddGenreDialogComponent
  ],
  providers: [
    AddGenreDialogService
  ],
  exports: [
    MatDialogModule
  ]
})
export class DialogModule { }
