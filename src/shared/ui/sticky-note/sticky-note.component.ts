import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input('size') size?: string;
  @Input('right-icon') rightIcon?: string;
  @Input('left-icon') leftIcon?: string;
  @Input('width') width?: number;
  @Output() action = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
