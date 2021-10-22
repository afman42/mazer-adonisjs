import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MapsController {

    googleMap({ view }: HttpContextContract)
	{
		let title:string = 'Google Map';

		return view.render('mazer.ui-map-google-map', { title });
	}

	jsVectorMap({ view }: HttpContextContract)
	{
		let title:string = 'JS Vector Map';

		return view.render('mazer.ui-map-jsvectormap', { title });
	}
}
