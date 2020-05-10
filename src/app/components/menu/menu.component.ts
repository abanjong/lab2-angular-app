import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fbURL: string;
  googleURL: string;

  constructor() { }

  ngOnInit(): void {
	this.fbURL = "http://www.facebook.com";
	this.googleURL = "http://www.google.com";
  }

  getFBURL() {
	return this.fbURL;
  }
}
