import { Component } from '@angular/core';
import { PagesService } from './Services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reign-test-app';
	check='';

	constructor(private readonly _dataService: PagesService) {
	}

	getNewSelected(event:string) {
		// console.log(event);
	  this._dataService.updateUrl(event)
		this.check=event
	}
}
