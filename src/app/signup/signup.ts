import { Component } from '@angular/core';
import { Http } from '@angular/http';

declare var require: any
const styles   = require('./signup.css');
const template = require('./signup.html');

@Component({
  selector: 'signup',
  template: template,
  styles: [ styles ]
})

export class Signup {
	constructor() {
		console.log('sign up')
	}
}