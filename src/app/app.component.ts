import { Component } from '@angular/core';
import { PagesService } from './Services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-reign-test-app';
	checkUrl:string='';
  areFavs=false;
	constructor(private readonly _dataService: PagesService) {
	}

	getNewSelected(event:string):void {
		// console.log(event);
	  this._dataService.updateUrl(event)
		this.checkUrl=event
	}

	getNewPages(event:any):void {
		 console.log(event);
	  this._dataService.updateUrl('',event)
		this.checkUrl=event
	}

	getshowFavs(event:any):void {
		this.areFavs=event
	}
}
