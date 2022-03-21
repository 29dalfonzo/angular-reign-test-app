import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
	pages=[1,2,3,4,5,6,7,8,9]
	currentPage=1

  constructor() { }

  ngOnInit(): void {
  }

	changePage(page:number):void{
		//validate page if <1
		if (page==0) return
    if (page > this.pages[this.pages.length - 1]) {
      // console.log('es mayor')
      this.remakePages(page, true);
      return;
    }
    if (page < this.pages[0]) {
      // console.log('es menr')
      this.remakePages(page, false);
      return;
    }
		this.currentPage=page
	}

   remakePages(i: number, more: boolean):void{
		let newButton:number[] =[]
    // take out the second element an add a new one (i+1) in button.length-2
    if (more) {
      newButton = this.pages.slice(1, this.pages.length);
      newButton.push(i);
    } else {
      newButton = this.pages.slice(0, this.pages.length - 1);
      newButton.unshift(i);
    }
			this.pages=newButton
			this.currentPage=i
  };

}
