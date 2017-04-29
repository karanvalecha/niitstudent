import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { LoginHelper } from '../helpers';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: [ './signup.css' ]
})

export class Signup extends LoginHelper {
	constructor(firebase: AngularFire, router: Router) {
		super(firebase, router)
		console.log('sign up')
	}

}