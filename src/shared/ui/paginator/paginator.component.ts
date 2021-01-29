import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input('lastPage') public lastPage: number = 10;
  @Input('currentPage') public currentPage: number = 1;

  @Output('transition') public transition: EventEmitter<number> = new EventEmitter();

  public pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <= this.lastPage; i++) {
      this.pages.push(i);
    }
  }

}
