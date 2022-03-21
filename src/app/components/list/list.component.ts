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
			this.setFavs()
		} else {
		this.getDatafromApi()
		}
		console.log(changes)

  }

	setFavs():void{
		  //check if typeof areFavs is number
		let data:any = localStorage.getItem('favs')
		if(data){
		let savedData = JSON.parse(data)
			console.log('savedData',savedData)
	  if(typeof this.check === 'number'){
				console.log(this.check,((this.check-1)*8))
			  this.data = savedData.splice(((this.check-1)*8),8)
			  console.log('this.data',this.data)
		  }else{
					this.data = savedData.slice(0,8)
			}
		}else{
			console.log('no data')
			this.data = []
		}
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
