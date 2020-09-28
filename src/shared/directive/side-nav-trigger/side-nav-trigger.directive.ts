import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[dirSideNavTrigger]'
})
export class SideNavTriggerDirective {

  constructor() { }

  @Input('target') target: HTMLElement;
  @Input('targetHiddenWidth') targetHiddenWidth: number;
  @Input('overlay') overlay: HTMLElement;
  @Input('screenWidth') screenWidth: number;
  @Input('changeWidth') changeWidth: number;

  isOpened: boolean = false;

  ngOnChanges() {
    if(this.screenWidth > 1400) {
      this.target.style.left = '0';
      this.overlay.style.display = 'block';
      this.isOpened = false;
    }else{
      this.target.style.left = `-${this.targetHiddenWidth}px`;
      this.overlay.style.display = 'none';
      this.isOpened = false;
    }
  }

  @HostListener('click')
  onClick() {
    if(!this.isOpened) {
      this.target.style.left = '0';
      this.overlay.style.display = 'block';
      this.isOpened = true;
    }else {
      this.target.style.left = `-${this.targetHiddenWidth}px`;
      this.overlay.style.display = 'none';
      this.isOpened = false;
    }
  }
}
