import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WidgetsController {

    chatbox({ view }: HttpContextContract)
	{
		let title:string = 'Chatbox';

		return view.render('mazer.ui-widget-chatbox', { title });
	}

	pricing({ view }: HttpContextContract)
	{
		let title:string = 'pricing';

		return view.render('mazer.ui-widget-pricing', { title });
	}

	toDoList({ view }: HttpContextContract)
	{
		let title:string = 'Todo List';

		return view.render('mazer.ui-widget-todolist', { title });
	}

	fileUploader({ view }: HttpContextContract)
	{
		let title:string = 'File Uploader';

		return view.render('mazer.ui-file-uploader', { title });
	}
}
