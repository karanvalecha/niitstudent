import { Component, AfterViewInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ]
})

export class Header implements AfterViewInit{
	constructor() {
		console.log('Header here')
	}
	ngAfterViewInit() {
		setTimeout( () => {
			$(".button-collapse").sideNav()
		}, 500)
	}
}