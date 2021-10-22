import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IconsController {

    bootstrapIcons({ view }: HttpContextContract)
	{
		let title:string = 'Bootstap Icons';

		return view.render('mazer.ui-icons-bootstrap-icons', { title });
	}

	fontAwesome({ view }: HttpContextContract)
	{
		let title:string = 'Fontawesome';

		return view.render('mazer.ui-icons-fontawesome', { title });
	}

	dripIcons({ view }: HttpContextContract)
	{
		let title:string = 'Dripicons';

		return view.render('mazer.ui-icons-dripicons', { title });
	}
}
