import { IActivity } from './activity.model'

//going to export a const of type IActivity array of activities
export const SAVED_ACTIVITIES: IActivity[] = [
{
	"id": 1,
	"name": "Main trial",
	"date": new Date('06/06/2019'),
	"distance": 6.2,
	"comments": "Nice",
	"gpxData": '../assets/gpx/1.gpx'
}
]