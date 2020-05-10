import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

 comment: string;

  constructor() { }

  ngOnInit(): void {
  }

  userOnClick($e) {
	alert('You '+$e.type+' the button at position ('+$e.clientX+','+$e.clientY+')');
  }
  
  userOnDBClick($e) {
	alert('You '+$e.type+' the button');
  }
}
