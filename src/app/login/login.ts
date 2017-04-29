import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { AngularFire } from 'angularfire2';
import { LoginHelper } from '../helpers';

declare var Materialize: any

@Component({
  selector: 'login',
  styleUrls: ['../signup/signup.css'],
  templateUrl: './login.html'
})

export class LoginComponent extends LoginHelper {
	constructor(af: AngularFire, router: Router) {
		super(af, router)
	}
}