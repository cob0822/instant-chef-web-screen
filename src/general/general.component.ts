import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchType } from '../shared/enum/search-type';
import { PageType } from '../shared/enum/page-type';
import { PageService } from '../shared/service/page.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  searchType = SearchType.RecipesList;
  SearchTypeEnum = SearchType;
  PageTypeEnum = PageType;

  constructor(private router: Router,
              readonly page: PageService) { }

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  get imagePath(): string {
    return `./assets/images/${this.url.slice(1).split('/')[0]}.png`;
  }

  ngOnInit(): void {
  }
}
