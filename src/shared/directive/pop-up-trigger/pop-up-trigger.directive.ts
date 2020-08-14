import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { PopUpComponent } from '../../ui/pop-up/pop-up.component';

@Directive({
  selector: '[dirPopUpTrigger]'
})
export class PopUpTriggerDirective {

  constructor() { }

  @Input('target') target: PopUpComponent;

  @HostListener('mouseenter')
  onMouseenter() {
    this.target.popUpStyle = {'display' : 'block'};
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.target.popUpStyle = {'display' : 'none'};
  }

  @HostListener('click')
  onMouseClick() {
    this.target.popUpStyle = {'display' : 'none'};
  }

}
