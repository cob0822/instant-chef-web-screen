import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  
  @Input('value') public value?: string;
  @Input('isRemoval') public isRemoval: boolean = false;

  @Output() private remove: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public removeTag(value: string) {
    this.value = undefined;
    this.remove.emit(value);
  }

}
