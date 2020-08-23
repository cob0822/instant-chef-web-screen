import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { PopUpComponent } from '../../ui/pop-up/pop-up.component';

@Directive({
  selector: '[dirPopUpTrigger]'
})
export class PopUpTriggerDirective {

  constructor() { }

  @Input('target') target: PopUpComponent;
  @Input('enterable') isEnterable: false;
  @Input('leavable') isLeavable: false;
  @Input('clickable') isClickable: false;
  @Input('all-allow') isAllowed: false;


  @HostListener('mouseenter')
  onMouseenter() {
    if(this.isEnterable || this.isAllowed) this.target.popUpStyle = {'display' : 'block'};
  }

  @HostListener('mouseleave')
  onMouseleave() {
    if(this.isLeavable || this.isAllowed) this.target.popUpStyle = {'display' : 'none'};
  }

  @HostListener('click')
  onMouseClick() {
    if(this.isClickable || this.isAllowed) this.target.popUpStyle = {'display' : 'none'};
  }

}
