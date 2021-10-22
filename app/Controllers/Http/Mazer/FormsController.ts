import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FormsController {

	input({ view }: HttpContextContract)
	{
		let title:string = 'Input';

		return view.render('mazer.form-element-input', { title });
	}

	inputGroup({ view }: HttpContextContract)
	{
		let title:string = 'Input Group';

		return view.render('mazer.form-element-input-group', { title });
	}

	select({ view }: HttpContextContract)
	{
		let title:string = 'Select';

		return view.render('mazer.form-element-select', { title });
	}


	radio({ view }: HttpContextContract)
	{
		let title:string = 'Radio';

		return view.render('mazer.form-element-radio', { title });
	}


	checkbox({ view }: HttpContextContract)
	{
		let title:string = 'Checkbox';

		return view.render('mazer.form-element-checkbox', { title });
	}

	textarea({ view }: HttpContextContract)
	{
		let title:string = 'Textarea';

		return view.render('mazer.form-element-textarea', { title });
	}

	layout({ view }: HttpContextContract)
	{
		let title:string = 'Form Layout';

		return view.render('mazer.form-layout', { title });
	}

	editorQuill({ view }: HttpContextContract)
	{
		let title:string = 'Quill';

		return view.render('mazer.form-editor-quill', { title });
	}

	editorCkeditor({ view }: HttpContextContract)
	{
		let title:string = 'CKEditor';

		return view.render('mazer.form-editor-ckeditor', { title });
	}

	editorSummernote({ view }: HttpContextContract)
	{
		let title:string = 'Summernote ';

		return view.render('mazer.form-editor-summernote', { title });
	}

	editorTinymce({ view }: HttpContextContract)
	{
		let title:string = 'TinyMCE';

		return view.render('mazer.form-editor-tinymce', { title });
	}
}
