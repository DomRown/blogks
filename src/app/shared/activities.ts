import { IActivity } from './activity.model'

//going to export a const of type IActivity array of activities
export const SAVED_ACTIVITIES: IActivity[] = [
{
	"id": 1,
	"name": "Main trial",
	"date": new Date('06/06/2019'),
	"distance": 6.2,
	"comments": "Nice weather",
	"gpxData": '../assets/gpx/1.gpx'
},
{
	"id": 2,
	"name": "Second run of the day",
	"date": new Date('06/06/2019'),
	"distance": 16.2,
	"comments": "Nice views",
	"gpxData": '../assets/gpx/1.gpx'
}
]