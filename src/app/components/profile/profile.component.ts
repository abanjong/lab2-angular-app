import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  name: string;
  year: number;
  img: string;
	
  constructor() { }

  ngOnInit(): void {
	this.id = 4640569671;
	this.name = "Anupong Banjongkan";
	this.year = 1984;
	this.img = "assets/imgs/kingkong.jpg"
  }

  getName() {
  	return this.name;
  }
}
