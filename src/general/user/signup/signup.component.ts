import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  public hide: boolean = true;
  public inputData: FormGroup;

  get name(): FormControl {
    return <FormControl>this.inputData.get('name');
  }

  get nameErrorMessage(): string {
    if(this.name.hasError('required')) return '必須項目です';
    if(this.name.hasError('minlength')) return '4文字以上で入力してください';
    if(this.name.hasError('maxlength')) return '12文字以下で入力してください';
    return '';
  }

  get phoneNumber(): FormControl {
    return <FormControl>this.inputData.get('phoneNumber');
  }

  get phoneNumberErrorMessages(): string[] {
    let errorMessages: string[] = [];
    if(this.phoneNumber.hasError('required')) errorMessages.push('必須項目です');
    if(this.phoneNumber.hasError('minlength')) errorMessages.push('11文字以上で入力してください');
    if(this.phoneNumber.hasError('pattern')) errorMessages.push('数字以外の文字が入力されています');
    return errorMessages;
  }

  get email(): FormControl {
    return <FormControl>this.inputData.get('email');
  }

  get emailErrorMessage(): string {
    if(this.email.hasError('required')) return '必須項目です';
    if(this.email.hasError('email')) return '正しく入力させていません';
    return '';
  }

  get password(): FormControl {
    return <FormControl>this.inputData.get('password');
  }

  get passwordErrorMessages(): string[] {
    let errorMessages: string[] = [];
    if(this.password.hasError('required')) errorMessages.push('必須項目です');
    if(this.password.hasError('minlength')) errorMessages.push('6文字以上で入力してください');
    if(this.password.hasError('maxlength')) errorMessages.push('12文字以下で入力してください');
    if(this.password.hasError('pattern')) errorMessages.push('英数字以外の文字が入力されています');
    return errorMessages;
  }

  get passwordConfirm() {
    return <FormControl>this.inputData.get('passwordConfirm');
  }

  get passwordConfirmErrorMessage(): string {
    if(this.passwordConfirm.hasError('required')) return '必須項目です';
    if(this.passwordConfirm.hasError('notSame')) return '入力内容が一致していません';
    return '';
  }

  ngOnInit(): void {
    this.inputData = this.formBuilder.group({
      name: new FormControl('', [ Validators.required, Validators.minLength(4), Validators.maxLength(12) ]),
      phoneNumber: new FormControl('', [ Validators.required, Validators.minLength(11), Validators.pattern(new RegExp('^[0-9]*$')) ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(new RegExp('^[0-9a-zA-Z]*$')) ]),
      passwordConfirm: new FormControl('', [ Validators.required, ]),
    }, { validator: this.checkPasswords });
  }

  public onSubmit() {
    let request: User = {
      isLogined: false,
      name: '',
      email: '',
      phoneNumber: 0,
      password: ''
    }

    request.name = this.name.value;
    request.email = this.email.value;
    request.phoneNumber = this.phoneNumber.value;
    request.password = this.password.value;
    console.log( request);
  }

  private checkPasswords(group: FormGroup) { 
    let password = group.controls.password.value;
    let passwordConfirm = group.controls.passwordConfirm.value;

    return group.controls.passwordConfirm.setErrors(password === passwordConfirm? null : { notSame: true });
  }
}
