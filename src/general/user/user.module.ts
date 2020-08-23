import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/share.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountService } from '../../shared/api/account.service';

@NgModule({
  declarations: [
    LoginComponent, 
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ],
  providers: [
    AccountService
  ]
})
export class UserModule { }
