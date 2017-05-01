import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { LoginHelper } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	constructor(private router:Router, _loginHelper: LoginHelper){
	}
	needsHeader() {
		console.log('hey there', this.router.url)
		return this.router.url !== '/'
	}
	title = "Awesome";
}
