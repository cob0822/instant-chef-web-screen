import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { DirectiveModule } from './directive/directive.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    DirectiveModule
  ],
  exports: [
    UiModule,
    DirectiveModule
  ]
})
export class ShareModule { }
