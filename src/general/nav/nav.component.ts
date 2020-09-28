import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/service/page.service';
import { PageType } from '../../shared/enum/page-type';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private onDestroy$ = new Subject();
  PageTypeEnum = PageType;
  _isLogined: boolean = false;

  constructor(private router: Router,
              readonly page: PageService,
              readonly auth: AuthService) { }

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  get isLogined(): boolean {
    return this._isLogined;
  }

  set isLogined(status: boolean) {
    this._isLogined = status;
  }

  ngOnInit(): void {
    this.isLogined = this.auth.checkAccessTokenIsValid();

    this.auth.isLogined$
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(status => {
      this.isLogined = status;
    }); 
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
