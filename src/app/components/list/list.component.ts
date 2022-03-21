import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 url=`https://hn.algolia.com/api/v1/search_by_date?query=&hitsPerPage=10&page=1`
	data:any[] = []
  constructor() { }

  ngOnInit(): void {
		this.fetchData()
  }

filterData(data:any):void{
		let filteredData = data.filter((item:aceptedItem ) => item.author && item.story_title && item.story_url && item.created_at)
		console.log(filteredData)
		this.data = filteredData.slice(0,8)
			
	}

	fetchData():void{
		fetch(this.url) .then(res => res.json())
		.then(data => {
			this.filterData(data.hits)
		})
	}

}


interface aceptedItem{
author: string;
story_title: string;
story_url: string;
created_at: string; 
}
