import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LayoutsController {

    default({ view }: HttpContextContract)
	{
		let title:string = 'Layout Default';

		return view.render('mazer.layout-default', { title });
	}

	oneColumn({ view }: HttpContextContract)
	{
		let title:string = 'Layout Vertical 1 Column';

		return view.render('mazer.layout-vertical-1-column', { title });
	}

	verticalNavbar({ view }: HttpContextContract)
	{
		let title:string = 'Vertical Navbar';

		return view.render('mazer.layout-vertical-navbar', { title });
	}

	horizontal({ view }: HttpContextContract)
	{
		let title:string = 'Layout Horizontal';

		return view.render('mazer.layout-horizontal', { title });
	}
}
