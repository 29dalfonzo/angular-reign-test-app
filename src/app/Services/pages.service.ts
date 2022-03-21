import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
 page=1
 hitsPerPage=15
 new=''
 private url=`${environment.api}${this.new}&hitsPerPage=${this.hitsPerPage}&page=${this.page}`

  constructor() {
	// console.log(this.url)
	}


	//get data from api 
	async getData(){
		//return a promise usin fetch
		return fetch(this.url)
		.then(response=>response.json())
		.then(data=>{
			// console.log('data',data)
			return data
		})
	}

	updateUrl(news?:string,page?:number,hitsPerPage?:number){
		this.new=news?news:this.new
		this.page=page?page:this.page
		this.hitsPerPage=hitsPerPage?(this.hitsPerPage+hitsPerPage):this.hitsPerPage
  this.url=`${environment.api}${this.new}&hitsPerPage=${this.hitsPerPage}&page=${this.page}`
		console.log('new url',this.url)
	}

}
