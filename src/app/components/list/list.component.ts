import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnChanges {
	@Input() check:string = ``

 url=`https://hn.algolia.com/api/v1/search_by_date?query=&hitsPerPage=10&page=1`
	data:any[] = []
  constructor(private readonly dataService:PagesService) { }

  ngOnInit(): void {
		this.getDatafromApi()
	}

	ngOnChanges(changes: SimpleChanges) {
		// console.log(changes)
		this.getDatafromApi()

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
