import { Component, OnInit } from '@angular/core';

//selector property bound to app-nav "tag?"
//reference in html element binds the component logic to the html tag
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myblogks'

  constructor() { }

  ngOnInit() {
  }

}
