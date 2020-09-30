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
  @Input('isTemporary') isTemporary: false;
  @Input('isVisible') isVisible?: boolean;
  @Input('inputtable') inputtable: false;
  @Input('width') width?: number;
  @Input('isOutputAction') isOutputAction: boolean | undefined = undefined;


  @HostListener('mouseenter')
  onMouseenter() {
    if(this.isEnterable || this.isTemporary) this.target.show(this.width);
  }

  @HostListener('mouseleave')
  onMouseleave() {
    if(this.isLeavable || this.isTemporary) this.target.hide();
  }

  @HostListener('click')
  onMouseClick() {
    if(this.isClickable || this.isTemporary) this.target.hide();
  }

  ngOnChanges() {
    if(this.isVisible && this.inputtable) {
      this.target.show(this.width);
    }else if(!this.isVisible && this.inputtable) {
      if(this.target.container) this.target.hide();
    }

    if(this.isOutputAction == true) {
      this.target.show(this.width);
    }else if(this.isOutputAction == false) {
      this.target.hide();
    }
  }

}
