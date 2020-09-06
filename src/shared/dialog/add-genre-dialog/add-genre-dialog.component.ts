import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-genre-dialog',
  templateUrl: './add-genre-dialog.component.html',
  styleUrls: ['./add-genre-dialog.component.scss']
})
export class AddGenreDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
