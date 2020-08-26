import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../shared/service/page.service';
import { PageType } from '../../shared/enum/page-type';
 
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

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
