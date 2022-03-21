import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	show: boolean = false;
	options:Option[]=[
		{name:'Angular', value:'angular', img:'assets/angularIcon.png'},
		{name:'React', value:'react', img:'assets/reactIcon.png'},
		{name:'Vue', value:'vue' , img:'assets/vueIcon.png'},
	]

	 selectedDropdown:Option={
		name: 'Select your news',
		value:'',
		img: null
	}

  constructor() { }

  ngOnInit(): void {
  }

  selectDropdown(option:Option){
    this.selectedDropdown=option;
    this.show=false;
  }

}

interface Option{
	name: string;
	value: string;
	img: string | null;
}
