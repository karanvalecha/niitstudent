import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';

declare var require: any
declare var Materialize: any
const styles   = require('../signup/signup.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})

export class LoginComponent {
	constructor(public af: AngularFire) {
		console.log('Hello login')
	}
	loginGoogle(){
		console.log('hey there')
	}

	useGoogle(){
		Materialize.toast('Coming Soon!', 1000)
	}

}