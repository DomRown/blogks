import { Component } from '@angular/core';
import { DataService } from './services/data.service';

//import component from angular core
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  students: {};
  constructor(private _dataService: DataService){
	  this._dataService.getStudents()
	  .subscribe(response => this.students = response);
	  
  }
  
}
