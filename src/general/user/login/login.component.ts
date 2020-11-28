import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../shared/model/user';
import { AccountService } from '../../../shared/api/account.service';
import { AuthService } from '../../../shared/service/auth.service';
import { UserService } from '../../../shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get email(): FormControl {
    return <FormControl>this.inputData.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.inputData.get('password');
  }

  get errorMessage(): string | undefined {
    return this._errorMessage;
  }

  set errorMessage(message: string | undefined) {
    this._errorMessage = message;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(status: boolean) {
    this._isLoading = status;
  }

  constructor(public formBuilder: FormBuilder,
              private user: UserService,
              private auth: AuthService,
              private account: AccountService,
              private changeDetector: ChangeDetectorRef,
              private router: Router) { }

  public inputData: FormGroup;
  public isHidden: boolean = true;
  public _errorMessage?: string;
  public _isLoading: boolean = false;

  ngOnInit(): void {
    this.inputData = this.formBuilder.group({
      email: new FormControl('', [ Validators.required]),
      password: new FormControl('', [ Validators.required ]),
    });
  }

  public onSubmit(): void {
    this.isLoading = true;

    let userInput: User = {
      email: undefined,
      password: '',
    }
    
    Object.assign(userInput, this.inputData.value);

    this.account.login(userInput)
      .subscribe(response => {
        if(response) {
          this.auth.isLogined = true;
          this.user.userName = response.name;
          this.router.navigate(['/']);
        }
        this.handleError();
        
      },error => {
        this.handleError();
    });
  }

  private handleError() {
    this.email.setValue(undefined);
    this.password.setValue(undefined);
    this.errorMessage = 'メールアドレスかパスワードが一致していません。';
    this.isLoading = false;
    this.changeDetector.markForCheck();
  }
}
