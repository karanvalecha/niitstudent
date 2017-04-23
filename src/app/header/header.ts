import { Component } from '@angular/core';

declare var require: any
const style = require('./header.scss')
const template = require('./header.html');

@Component({
  selector: 'header',
  template: template,
  styles: [style]
})

export class Header {
	constructor() {
		console.log('Header here')
	}
}