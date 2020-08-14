import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpTriggerDirective }  from './pop-up-trigger/pop-up-trigger.directive';


@NgModule({
  declarations: [
    PopUpTriggerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopUpTriggerDirective
  ]
})
export class DirectiveModule { }
