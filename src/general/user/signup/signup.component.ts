import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../shared/model/user';
import { AccountService } from '../../../shared/api/account.service';
import { AuthService } from '../../../shared/service/auth.service';
import { UserService } from '../../../shared/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  get name(): FormControl {
    return <FormControl>this.inputData.get('name');
  }

  get phoneNumber(): FormControl {
    return <FormControl>this.inputData.get('phone_number');
  }

  get email(): FormControl {
    return <FormControl>this.inputData.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.inputData.get('password');
  }

  get passwordConfirm(): FormControl {
    return <FormControl>this.inputData.get('passwordConfirm');
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

  constructor(private formBuilder: FormBuilder,
              private account: AccountService,
              private user: UserService,
              private auth: AuthService,
              private changeDetector: ChangeDetectorRef,
              private router: Router) { }

  public isPasswordHidden: boolean = true;
  public isConfirmHidden: boolean = true;
  public inputData: FormGroup;
  public _errorMessage?: string;
  public _isLoading: boolean = false;

  public getErrorMessage(form: FormControl): string[] {
    let errorMessages: string[] = [];
    if(form.hasError('required')) errorMessages.push('必須項目です');
    if(form.hasError('email')) errorMessages.push('正しく入力させていません');
    if(form.hasError('maxlength')) errorMessages.push('12文字以下で入力してください');
    if(form.hasError('notSame')) errorMessages.push('入力内容が一致していません');

    if(form.hasError('minlength')) {
      switch(form) {
        case this.name:
          errorMessages.push('4文字以上で入力してください');
        break;

        case this.password:
          errorMessages.push('6文字以上で入力してください');
        break;

        case this.phoneNumber:
          errorMessages.push('11文字以上で入力してください');
        break;
      }
    }

    if(form.hasError('pattern')) {
      switch(form) {
        case this.phoneNumber:
          errorMessages.push('数字以外の文字が入力されています');
        break;

        case this.password :
          errorMessages.push('英数字以外の文字が入力されています');
        break;
      }
    }

    return errorMessages
  }

  ngOnInit(): void {
    this.inputData = this.formBuilder.group({
      name: new FormControl(undefined, [ Validators.required, Validators.minLength(4), Validators.maxLength(12) ]),
      phone_number: new FormControl(undefined, [ Validators.minLength(11), Validators.pattern(new RegExp('^[0-9]*$')) ]),
      email: new FormControl(undefined, [ Validators.required, Validators.email ]),
      password: new FormControl(undefined, [ Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(new RegExp('^[0-9a-zA-Z]*$')) ]),
      passwordConfirm: new FormControl(undefined, [ Validators.required ]),
    }, { validator: this.checkPasswords });
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = undefined;
    
    let userInput: User = {
      name: undefined,
      email: undefined,
      phone_number: undefined,
      password: '',
      passwordConfirm: undefined
    }
    
    Object.assign(userInput, this.inputData.value);

    this.account.signup(userInput)
      .subscribe(response => {
        this.auth.isLogined = true;
        this.user.userName = response.name;
        this.router.navigate(['/']);
      },error => {
        this.email.setValue(undefined);
        this.password.setValue(undefined);
        this.passwordConfirm.setValue(undefined);
        this.errorMessage = '入力したメールアドレスは既に登録されています。';
        this.isLoading = false;
        this.changeDetector.markForCheck();
    });
  }

  private checkPasswords(group: FormGroup): void { 
    let password = group.controls.password.value;
    let passwordConfirm = group.controls.passwordConfirm.value;

    return group.controls.passwordConfirm.setErrors(password === passwordConfirm? null : { notSame: true });
  }

  test() {
    this.auth.isLogined = true;
  }
}
