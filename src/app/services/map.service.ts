import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from './activity.service';
import { SAVED_ACTIVITIES } from '../shared/activities';

import { GeoJson } from '../classes/map';
import * as mapboxgl from 'mapbox-gl';

var apiToken = Environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80];
const defaultZoom: number = 8;

@Injectable({
  providedIn: 'root'
})
	export class MapService {
		
	  constructor() {  }	
		
	  getActivity(id: number){
		  return SAVED_ACTIVITIES.slice(0).find(run => run.id ==id)
	  }
	  
	  //plot gpx on leaflet map and style route
	  plotActivity(id: number){
		  var myStyle = {
			  "color": "#3949AB",
			  "weight": 5,
			  "opacity": 0.95
		  };
	  
	  //var map = L.map('map').setView(defaultCoords, defaultZoom);
	  var map = L.map('map').setView([51.505, -0.09], 13);
	  
	  /*map.maxZoom = 100;	 
	  L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}/.png?access_token={accessToken}', {
		atrribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
		maxZoom: 18,
		id: 'mapbox.streets-basic',
		accessToken: apiToken
	  }).addTo(map);
	  
	  var customLayer = L.geoJson(null, {
		  style:myStyle });
		  
	  var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id ==id).gpxData, null, customLayer)
	  .on('ready', function(){
		  map.fitBounds(gpxLayer.getBounds());
	  }).addTo(map);*/
	}
}