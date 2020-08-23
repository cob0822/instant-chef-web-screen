import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ui-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor() {}

  popUpStyle: {
    [key: string]: string;
  }

  @HostListener('mouseenter')
  onMouseenter() {
    this.popUpStyle = {'display' : 'block'};
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.popUpStyle = {'display' : 'none'};
  }

  @HostListener('click')
  onMouseClick() {
    this.popUpStyle = {'display' : 'none'};
  }

  ngOnInit(): void {
    this.popUpStyle = {
      'display' : 'none'
    };
  }

  public close() {
    this.popUpStyle = {'display' : 'none'};
  }

}
