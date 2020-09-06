import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddGenreDialogComponent } from './add-genre-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AddGenreDialogService extends MatDialog {

  public openDialog(): MatDialogRef<AddGenreDialogComponent> {
    const baseConfig = {
      minWidth: 970,
    };
    return this.open(AddGenreDialogComponent, baseConfig);
  }

}
