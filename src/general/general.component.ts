import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchType } from '../shared/enum/search-type';
import { PageType } from '../shared/enum/page-type';
import { PageService } from '../shared/service/page.service';
import { AuthService } from '../shared/service/auth.service';
import { UserService } from '../shared/service/user.service';
import { Subject } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  public searchType = SearchType.RecipesList;
  public SearchTypeEnum = SearchType;
  public PageTypeEnum = PageType;
  private onDestroy$ = new Subject();

  constructor(private router: Router,
              readonly page: PageService,
              readonly auth: AuthService,
              readonly user: UserService ,
              private bnIdle: BnNgIdleService,
              private changeDetector: ChangeDetectorRef) { }

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  get imagePath(): string {
    return `./assets/images/${this.url.slice(1).split('/')[0]}.png`;
  }

  get innerWidth(): number {
    return window.innerWidth;
  }

  get isLogined(): boolean {
    return this.auth.isLogined;
  }

  ngOnInit(): void {
    if(this.auth.accessToken) this.auth.isLogined = true;

    this.bnIdle.startWatching(1800).subscribe(res => {
      if(res && this.isLogined) { 
        alert('セッションタイムアウトが発生しました。\n再度ログインから実行してください。');
        this.auth.logout();
      }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
