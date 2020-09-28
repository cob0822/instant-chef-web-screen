import { ChangeDetectionStrategy, Component, OnChanges, ChangeDetectorRef, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class SpinnerComponent implements OnChanges {

  @Input('size') size: string = 'medium';

  constructor(private changeDetector: ChangeDetectorRef ) { }

  public diameter: number = 100;

  ngOnChanges(changes: SimpleChanges) {
    if(changes.size) {
      this.diameter = this.getDiameter(this.size);
      this.changeDetector.markForCheck();
    }
  }

  private getDiameter(size: string) {
    switch(size) {
      case 'large': return 150;
      case 'medium': return 100;
      case 'small': return 50;
      default: return 100;
    }
  }

}
