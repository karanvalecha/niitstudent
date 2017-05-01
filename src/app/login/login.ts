import { Component } from '@angular/core';
import { LoginHelper } from '../helpers';

declare var Materialize: any

@Component({
  selector: 'login',
  styleUrls: ['../signup/signup.css'],
  templateUrl: './login.html'
})

export class LoginComponent {
	user: any;
	login_helper: any;
	constructor(lh: LoginHelper) {
		this.login_helper = lh;
		this.user = lh.user;
	}
}