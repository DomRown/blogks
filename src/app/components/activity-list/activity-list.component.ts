import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../shared/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  //properties returned by onInit methods
  activities: IActivity[];
  totalActivities: number
  totalDistance: number
  firstDate: Date
  
  constructor(private _activityService: ActivityService) { }
  

  ngOnInit() {
	this.activities = this._activityService.getActivities();
	this.totalActivities = this._activityService.getTotalActivities(this.activities);	
	this.firstDate = this._activityService.getFirstDate(this.activities);
  }

}

 

