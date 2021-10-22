import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ComponentsController {
    
    alert({ view }: HttpContextContract)
	{
		let title:string = 'Alert';

		return view.render('mazer.component-alert', { title });
	}

	badge({ view }: HttpContextContract)
	{
		let title:string = 'Badge';

		return view.render('mazer.component-badge', { title });
	}

	breadcrumb({ view }: HttpContextContract)
	{
		let title:string = 'Breadcrumb';

		return view.render('mazer.component-breadcrumb', { title });
	}

	button({ view }: HttpContextContract)
	{
		let title:string = 'Button';

		return view.render('mazer.component-button', { title });
	}

	card({ view }: HttpContextContract)
	{
		let title:string = 'Card';

		return view.render('mazer.component-card', { title });
	}

	carousel({ view }: HttpContextContract)
	{
		let title:string = 'Carousel';

		return view.render('mazer.component-carousel', { title });
	}

	dropdown({ view }: HttpContextContract)
	{
		let title:string = 'Dropdown';

		return view.render('mazer.component-dropdown', { title });
	}

	listGroup({ view }: HttpContextContract)
	{
		let title:string = 'List Group';

		return view.render('mazer.component-list-group', { title });
	}

	modal({ view }: HttpContextContract)
	{
		let title:string = 'Modal';

		return view.render('mazer.component-modal', { title });
	}

	navs({ view }: HttpContextContract)
	{
		let title:string = 'Navs';

		return view.render('mazer.component-navs', { title });
	}

	pagination({ view }: HttpContextContract)
	{
		let title:string = 'Pagination';

		return view.render('mazer.component-pagination', { title });
	}

	progress({ view }: HttpContextContract)
	{
		let title:string = 'Progress';

		return view.render('mazer.component-progress', { title });
	}

	spinner({ view }: HttpContextContract)
	{
		let title:string = 'Spinner';

		return view.render('mazer.component-spinner', { title });
	}

	tooltip({ view }: HttpContextContract)
	{
		let title:string = 'Tooltip';

		return view.render('mazer.component-tooltip', { title });
	}

	extraAvatar({ view }: HttpContextContract)
	{
		let title:string = 'Avatar';

		return view.render('mazer.extra-component-avatar', { title });
	}

	extraSweetAlert({ view }: HttpContextContract)
	{
		let title:string = 'Sweet Alert';

		return view.render('mazer.extra-component-sweetalert', { title });
	}

	extraToastify({ view }: HttpContextContract)
	{
		let title:string = 'Toastify';

		return view.render('mazer.extra-component-toastify', { title });
	}

	extraRating({ view }: HttpContextContract)
	{
		let title:string = 'Rating';

		return view.render('mazer.extra-component-rating', { title });
	}

	extraDivider({ view }: HttpContextContract)
	{
		let title:string = 'Divider';

		return view.render('mazer.extra-component-divider', { title });
	}
}
