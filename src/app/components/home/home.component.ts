import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  blogks=[]
  //create instance via dep inj
  constructor(private data: DataService) { }

  ngOnInit() {
	  //fetch blogsk from local static
	  this.blogks = JSON.parse(localStorage.getItem("blogks"));
  }
  
  
  removeBlogk(blogk){
	  let index = this.blogks.indexOf(blogk);
	  console.log(index);
	  this.blogks.splice(index, 1);
	  localStorage.setItem("blogks", JSON.stringify(this.blogks));
	  alert("Blogk removed");
	  
  }
}
