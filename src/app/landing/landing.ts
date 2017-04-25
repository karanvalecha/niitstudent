import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.html',
  styleUrls: [ './landing.css' ]
})
export class Landing {
	constructor(private router:Router) {
		setTimeout(function(){
			this.router.navigateByUrl('/home');
		}.bind(this), 3100)
	}
}