export interface IActivity{
	//properties of activity
	id: number
	name: string
	date: Date
	comments?: string
	distance?: number
	gpxData: string
}