import { Component } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { Router } from '@angular/router'
import { LoginHelper } from '../../helpers';

declare const $:any;
@Component({
  selector: 'login_links',
  templateUrl: './nav_links.html',
  styleUrls: [ '../header.scss' ]
})

export class NavLinksComponent extends LoginHelper {
	constructor(firebase: AngularFire, router: Router) {
		super(firebase, router)
		console.log('nav link')
	}

	navLinkClicked() {
	  $(".button-collapse").sideNav('hide')
	}
}