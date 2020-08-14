import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(readonly location: Location) { }

  public test: string;
  public hide: boolean = true;

  ngOnInit(): void {
  }

}
