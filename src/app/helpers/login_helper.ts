import { Injectable } from '@angular/core'
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

declare var Materialize: any

@Injectable()
export class LoginHelper {
	user: any
	router: Router;
	constructor(public firebase: AngularFire, router: Router) {
		this.user = JSON.parse(localStorage.getItem('user'))
		this.firebase = firebase;
		this.router = router;
		this.setUser()
	}

	setUser(){
		this.firebase.auth.subscribe((snapshot) => {
			this.user = snapshot && snapshot.auth;
			localStorage.setItem('user', JSON.stringify(this.user))
		})
	}

	loginGoogle(){
		this.firebase.auth.login().then((af) => {
			this.user = af.auth;
			if(this.user) {
				this.router.navigateByUrl('/home');
			}
			Materialize.toast(`Welcome ${this.user.displayName}`, 2000)
			const {email, photoURL, displayName} = this.user
			this.updateUserData({email, photoURL, displayName})
		})
	}
	updateUserData(data: {}) {
		this.firebase.database.object(`/users/${this.user.uid}`).update(data)
	}

	logOut(){
		var func = () => {
			Materialize.toast(`Bye ${this.user.displayName}`, 2000)
			this.router.navigateByUrl('/home');
		}
		this.firebase.auth.logout().then(func)
		localStorage.removeItem('user')
	}

	useGoogle(){
		Materialize.toast('Please use Google for now', 1000)
	}

}