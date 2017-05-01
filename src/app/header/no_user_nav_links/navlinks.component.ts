import { Component } from '@angular/core';
import { LoginHelper } from '../../helpers';

declare const $:any;
@Component({
  selector: 'login_links',
  templateUrl: './nav_links.html',
  styleUrls: [ '../header.scss', './nav_styles.scss' ]
})

export class NavLinksComponent {
	login_helper: any;
	constructor(lh: LoginHelper) {
		console.log('nav link')
		this.login_helper = lh;
	}

	navLinkClicked() {
	  $(".button-collapse").sideNav('hide')
	}
}