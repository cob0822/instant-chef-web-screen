import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloneInputFormComponent } from './clone-input-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CloneInputFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    CloneInputFormComponent
  ]
})
export class CloneInputFormModule { }
