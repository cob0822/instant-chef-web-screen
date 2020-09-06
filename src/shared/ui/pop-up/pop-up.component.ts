import { Component, OnInit, HostListener, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input('inputtable') inputtable: boolean = false;
  @ViewChild('container') container: ElementRef;

  constructor() {}

  popUpStyle: {
    [key: string]: string;
  }

  @HostListener('mouseenter')
  onMouseenter() {
    if(!this.inputtable) this.container.nativeElement.style.display = 'block';
  }

  @HostListener('mouseleave')
  onMouseleave() {
    if(!this.inputtable) this.hide();
  }

  @HostListener('click')
  onMouseClick() {
    this.hide()
  }

  ngOnInit(): void {
  }

  public show(width: number | undefined) {
    if(width) this.popUpStyle = {'width':`${width}px`};
    this.container.nativeElement.style.display = 'block';
  }

  public hide() {
    if(this.container) this.container.nativeElement.style.display = 'none';
  }
}
