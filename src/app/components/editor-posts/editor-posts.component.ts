import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../shared/activity.model';

@Component({
  selector: 'app-editor-posts',
  templateUrl: './editor-posts.component.html',
  styleUrls: ['./editor-posts.component.css']
})
export class EditorPostsComponent implements OnInit {

  constructor() { }
  blogks = []
  activities: IActivity[]
  ngOnInit() {
  }

  addBlogk(title, content){
	  let blogk = { "title": title.value, "content": content.value };
	  if(localStorage.getItem("blogks")) {
		  this.blogks = JSON.parse(localStorage.getItem("blogks"));
	  }
	  this.blogks.push(blogk);
      localStorage.setItem("blogks", JSON.stringify(this.blogks));	  
	  
  }
 
}
