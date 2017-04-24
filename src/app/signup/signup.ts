import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: [ './signup.css' ]
})

export class Signup {
	constructor(public firebase: AngularFire) {
		console.log('sign up')
	}

	loginGoogle(){
		this.firebase.auth.login()
	}

}