import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  @Input('detail-button')
  isDetailButton?: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
