import { Component } from '@angular/core';
import { LoginHelper } from '../helpers';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: [ './signup.css' ]
})

export class Signup {
	user: any;
	login_helper: any;
	constructor(lh: LoginHelper) {
		this.login_helper = lh;
		this.user = lh.user;
	}

}