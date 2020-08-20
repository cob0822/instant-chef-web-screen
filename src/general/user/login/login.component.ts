import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../shared/model/user';
import { UserService } from '../../../shared/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,
              private user: UserService) { }

  public inputData: FormGroup;
  public hide: boolean = true;

  ngOnInit(): void {
    this.inputData = this.formBuilder.group({
      name: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
    });
  }

  public onSubmit(): void {
  }

}
