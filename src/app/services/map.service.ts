import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { DataService } from './data.service';

import { GeoJson } from '../classes/map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
	export class MapService {

	  constructor(private data: DataService) {
		  mapboxgl.accessToken = Environment.mapbox.accessToken
		  
	  }
	  
	  //initializeMap(this.accessToken):{
	//	  return accessToken;
	 // }
	  
	  //get markers returnss data list observable
	  getMarkers(): DataListObservable<any> {
		  return this.data.list('/markers')
	  }
	  
	  createMarker(data: GeoJson){
		  return this.data.list('/markers').push(data)
	  }
	  
	  removeMarker($key: string){
		  return this.data.object('/markers' + $key).remove()
	  }
	  
	}
