import { Component, Input, AfterViewInit } from '@angular/core'

declare const $:any;

@Component({
	selector: 'likers',
	templateUrl: './likers.html'
})

export class LikerComponent implements AfterViewInit {
	@Input() id:any;
	@Input() users:any;

	ngAfterViewInit() {
		$(`#${this.id}`).modal();
	}
}