import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { IndexComponent } from './index/index.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { PageService } from '../shared/service/page.service';
import { NavComponent } from './nav/nav.component';
import { AuthService } from '../shared/service/auth.service';
import { AccountService } from '../shared/api/account.service';
import { UserService } from '../shared/service/user.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationResponseInterceptor } from '../shared/interceptor/authorization-response-interceptor';

 
@NgModule({
  declarations: [
    GeneralComponent,
    IndexComponent,
    RecipeComponent,
    NavComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    GeneralRoutingModule,
  ],
  providers: [
    PageService,
    AuthService,
    AccountService,
    UserService,
    BnNgIdleService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationResponseInterceptor, multi: true },
  ],
  exports: [
    ShareModule,
  ]
})
export class GeneralModule { }
