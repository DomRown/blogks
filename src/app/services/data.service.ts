import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  firstDataClick() {
	  return console.log('clicked via data service');
  }
}
