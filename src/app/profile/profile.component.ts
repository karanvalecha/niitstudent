import { Component, Input } from '@angular/core'
import { LoginHelper } from '../helpers'

@Component({
	templateUrl: './profile.html',
	selector: 'profile'
})
export class ProfileComponent {
	@Input() user:any
	@Input() small_size:boolean
	login_helper:LoginHelper
	constructor(lh: LoginHelper) {
		this.login_helper = lh
	}
	getUser() {
		return this.user || this.login_helper.user
	}
}