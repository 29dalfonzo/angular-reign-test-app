import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
	selectedTab=true

  constructor() { }

  ngOnInit(): void {
  }

	changeTab(tab:boolean):void{
		this.selectedTab=tab
	}

}
