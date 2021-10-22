import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApplicationsController {

	email({ view }: HttpContextContract)
	{
		let title:string = 'Email Application';

		return view.render('mazer.application-email', {title});
	}

	chat({ view }: HttpContextContract)
	{
		let title:string = 'Chat Application';

		return view.render('mazer.application-chat', {title});
	}

	gallery({ view }: HttpContextContract)
	{
		let title:string = 'Gallery Application';

		return view.render('mazer.application-gallery', {title});
	}

	checkout({ view }: HttpContextContract)
	{
		let title:string = 'Checkout Application';

		return view.render('mazer.application-checkout', {title});
	}

	authLogin({ view }: HttpContextContract)
	{
		let title:string = 'Login';

		return view.render('mazer.auth-login', {title});
	}

	authRegister({ view }: HttpContextContract)
	{
		let title:string = 'Register';

		return view.render('mazer.auth-register', {title});
	}

	authForgotPassword({ view }: HttpContextContract)
	{
		let title:string = 'Forgot Password';

		return view.render('mazer.auth-forgot-password', {title});
	}

	error403({ view }: HttpContextContract)
	{
		let title:string = '403';

		return view.render('mazer.error-403', {title});
	}

	error404({ view }: HttpContextContract)
	{
		let title:string = '404';

		return view.render('mazer.error-404', {title});
	}

	error500({ view }: HttpContextContract)
	{
		let title:string = '500';

		return view.render('mazer.error-500', {title});
	}
}
