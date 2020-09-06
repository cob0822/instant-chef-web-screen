import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[dirStickyNote]'
})
export class StickyNoteDirective {

  private htmlElement: HTMLElement;

  constructor(private element: ElementRef) { 
    this.htmlElement = element.nativeElement;
  }

  @Input('size') size?: string;
  @Input('target') target?: string;

  ngOnChanges() {
    if(!this.target || this.target == 'container') {
      switch(this.size) {
        case 'xlarge':
          this.htmlElement.style.fontSize = '40px';
          this.htmlElement.style.padding = '10px 50px';
          this.htmlElement.style.borderLeft = '30px solid #cc9966';
        break;
  
        case 'small':
          this.htmlElement.style.fontSize = '16px';
          this.htmlElement.style.padding = '10px 50px';
        break;
  
        default:
          this.htmlElement.style.fontSize = '22px';
          this.htmlElement.style.padding = '5px 25px';
          this.htmlElement.style.borderLeft = '15px solid #cc9966';
        break;
      }
    }else if(this.target.indexOf('icon')) {
      switch(this.size) {
        case 'xlarge':
          this.htmlElement.style.fontSize = '35px';
        break;
  
        case 'small':
          this.htmlElement.style.fontSize = '11px';
        break;
  
        default:
          this.htmlElement.style.fontSize = '20px';
        break;
      }
    }

    if(this.target == 'right-icon') {
      switch(this.size) {
        case 'xlarge':
          this.htmlElement.style.marginRight = '25px';
        break;
  
        case 'small':
        break;
  
        default:
          this.htmlElement.style.marginRight = '10px';
        break;
      }
    }else if(this.target == 'left-icon') {
      this.htmlElement.style.cursor = 'pointer';
      switch(this.size) {
        case 'xlarge':
          this.htmlElement.style.marginLeft = '25px';
        break;
  
        case 'small':
        break;
  
        default:
          this.htmlElement.style.marginLeft = '10px';
        break;
      }
    }
  }

}
