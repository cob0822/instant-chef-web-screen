import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../shared/service/page.service';
import { PageType } from '../../../shared/enum/page-type';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  PageTypeEnum = PageType;

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  constructor(private router: Router,
              readonly page: PageService) { }

  ngOnInit(): void {
  }

}
