import { Component } from '@angular/core'
import { LoginHelper } from '../helpers'

@Component({
	templateUrl: './profile.html',
})
export class ProfileComponent {
	login_helper:LoginHelper
	constructor(lh: LoginHelper) {
		this.login_helper = lh
	}
}