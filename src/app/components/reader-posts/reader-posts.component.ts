import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-reader-posts',
  templateUrl: './reader-posts.component.html',
  styleUrls: ['./reader-posts.component.css']
})
export class ReaderPostsComponent implements OnInit {

  constructor(private _mapService: MapService) { }

  ngOnInit() {
  }

}
