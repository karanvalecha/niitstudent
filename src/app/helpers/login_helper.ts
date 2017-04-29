import { OnInit, OnDestroy } from '@angular/core'
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

declare var Materialize: any

export class LoginHelper implements OnInit, OnDestroy {
	user: any
	af_sub: any
	router: Router;
	constructor(public firebase: AngularFire, router: Router) {
		this.router = router
	}

	ngOnInit() {
		this.af_sub = this.firebase.auth.subscribe(auth => {
			this.user = auth && auth.google;
			if(this.user) {
				this.router.navigateByUrl('/home');
			}
		});
	}

	ngOnDestroy() {
		this.af_sub.unsubscribe();
	}

	loginGoogle(){
		this.firebase.auth.login().then((af) => {
			Materialize.toast(`Welcome ${this.user.displayName}`, 2000)
		})
	}

	logOut(){
		var func = () => {
			Materialize.toast(`Bye ${this.user.displayName}`, 2000)
			this.user = null;
		}
		this.firebase.auth.logout().then(func)
	}

	useGoogle(){
		Materialize.toast('Please use Google for now', 1000)
	}

}