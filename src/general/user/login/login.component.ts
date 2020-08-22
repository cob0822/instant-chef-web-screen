import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../shared/model/user';
import { AccountService } from '../../../shared/api/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get name(): FormControl {
    return <FormControl>this.inputData.get('name');
  }

  get password(): FormControl {
    return <FormControl>this.inputData.get('password');
  }

  constructor(public formBuilder: FormBuilder,
              private account: AccountService) { }

  public inputData: FormGroup;
  public isHidden: boolean = true;

  ngOnInit(): void {
    this.inputData = this.formBuilder.group({
      name: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
    });
  }

  public onSubmit(): void {

    let userInput: User = {
      name: '',
      password: '',
    }
    
    Object.assign(userInput, this.inputData.value);

    this.account.login(userInput).subscribe((response: User) => {
      console.log(response);
    });
  }
}
