import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	@Output() newSelectedEvent = new EventEmitter<string>();
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
		this.checkselect();
  }

  selectDropdown(option:Option){
		//save selected option in local storage
		localStorage.setItem('selected', JSON.stringify(option));
    this.selectedDropdown=option;
		this.newSelectedEvent.emit(option.value);
    this.show=false;
  }

	checkselect(){
		let selected=localStorage.getItem('selected');
		if(selected){
			this.selectedDropdown=JSON.parse(selected);
		}
	}

}

interface Option{
	name: string;
	value: string;
	img: string | null;
}
