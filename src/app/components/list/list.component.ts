import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnChanges {
	@Input() check:string = ``
	@Input() areFavs:boolean = false

	data:any[] = []
  constructor(private readonly dataService:PagesService) { }

  ngOnInit(): void {
		if (this.areFavs){
			let savedData = localStorage.getItem('favs')
			if(savedData){
				this.data = JSON.parse(savedData)
			}
			
		} else {
		this.getDatafromApi()
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.areFavs){
			let savedData = localStorage.getItem('favs')
			if(savedData){
				this.data = JSON.parse(savedData)
			}else{
				this.data = []
			}
		} else {
		this.getDatafromApi()
		}
		console.log(changes)

  }

 getDatafromApi(){
		this.dataService.getData().then((data:any)=>{
			this.filterData(data.hits)
		})
		// this.filterData(getData)
}

filterData(data:any):void{
		let filteredData = data.filter((item:aceptedItem ) => item.author && item.story_title && item.story_url && item.created_at)
		// console.log('filteredData',filteredData)
		// console.log(filteredData)
		//validate if filtered data >=8
		//if not, fetch data again
	if(filteredData.length < 8){
	this.dataService.updateUrl('',0,(8-filteredData.length))
			this.getDatafromApi()
	}else{
		this.data = filteredData.slice(0,8)
	}
}
	
}


interface aceptedItem{
author: string;
story_title: string;
story_url: string;
created_at: string; 
}
