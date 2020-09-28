import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpTriggerDirective }  from './pop-up-trigger/pop-up-trigger.directive';
import { SideNavTriggerDirective } from './side-nav-trigger/side-nav-trigger.directive';

@NgModule({
  declarations: [
    PopUpTriggerDirective,
    SideNavTriggerDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopUpTriggerDirective,
    SideNavTriggerDirective
  ]
})
export class DirectiveModule { }
