import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@Input() data: any;
	heart:string='/assets/empty-icon-favorite-2.svg'
	heartFull:string='assets/fulled-icon-favorite-3.svg'
	fav:boolean=false

  constructor() { }

  ngOnInit(): void {
		this.checkFav()
  }


	getTimeDiff (time: string | number | Date):any {
		const date:any = new Date(time)
		const now:any = new Date()
		const diff:any = now - date
		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
		const hours = Math.floor(diff / (1000 * 60 * 60))
		const minutes = Math.floor(diff / (1000 * 60))
		const seconds = Math.floor(diff / 1000)
		if (days > 0) {
			return `${days} days ago`
		} else if (hours > 0) {
			return `${hours} hours ago`
		} else if (minutes > 0) {
			return `${minutes} minutes ago`
		} else if (seconds > 0) {
			return `${seconds} seconds ago`
		}
	}

	openinNewTab(url: string) {
		window.open(url, '_blank');
	}

	saveFav(){
		//save favs to local storage as arr
		//get favs from local storage
		const getFavs:any = localStorage.getItem('favs')
		let favs:any =JSON.parse(getFavs)|| []
		console.log('favs',favs)

		// console.log('favs', favs)
		//check if fav is already in local storage
		let finded = favs.find((fav:any) => fav.objectID === this.data.objectID)
		if (finded) {
      //remove from favs
      const newFavs = favs.filter((fav:any) => fav.objectID !== this.data.objectID);
      // console.log('newFavs', newFavs)
      localStorage.setItem("favs", JSON.stringify(newFavs));
		this.fav=false
      return;
    }
		//add to favs
		// console.log(favs,data)
		favs.push(this.data)
		// console.log(favs,data)
		localStorage.setItem('favs', JSON.stringify(favs))
		this.fav=true
	}

	checkFav(){
		const getFavs:any = localStorage.getItem('favs')
		let favs:any =JSON.parse(getFavs)|| []
		// console.log('favs',favs)
		//check if fav is already in local storage
		let finded = favs.find((fav:any) => fav.objectID === this.data.objectID)
		if (finded) {
			this.fav=true
			return
		}
		this.fav=false
	}

}


