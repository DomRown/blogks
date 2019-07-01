import { Component, OnInit } from '@angular/core';
import { GeoJson, FeatureCollection } from '../classes/map';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  //default settings for map
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9'
  lat: 36.75;
  lng: -122.41;
  message = 'Hello map';

  //data settings //source is conn to mapbox liv
  source: any;
  markers: any;
  
  constructor(private mapService: MapService) { }

  ngOnInit() {
	  this.markers = this.mapService.getMarkers();
	  this.initializeMap();
  }

}
