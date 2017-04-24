import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';

declare var Materialize: any

@Component({
  selector: 'login',
  styleUrls: ['../signup/signup.css'],
  templateUrl: './login.html'
})

export class LoginComponent {
	constructor(public firebase: AngularFire) {
		console.log('Hello login')
	}

	loginGoogle(){
		this.firebase.auth.login()
	}

	useGoogle(){
		Materialize.toast('Coming Soon!', 1000)
	}

}