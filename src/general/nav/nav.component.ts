import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/service/page.service';
import { PageType } from '../../shared/enum/page-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  constructor(private router: Router,
              readonly page: PageService) { }

  PageTypeEnum = PageType;

  ngOnInit(): void {
  }

}
