import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result;
  
  constructor(private _http: HttpClient) { }
    configUrl = 'assets/config.json';

	getStudents() {
		return this._http.get(this.configUrl);
		}
  
  
  firstDataClick() {
	  return console.log('clicked via data service');
  }
}

