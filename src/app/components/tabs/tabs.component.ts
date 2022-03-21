import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
	@Output() newSelectedTab = new EventEmitter<boolean>();

	selectedTab=false

  constructor() { }

  ngOnInit(): void {
  }

	changeTab(tab:boolean):void{
		this.selectedTab=tab
		this.newSelectedTab.emit(tab)
	}

}
