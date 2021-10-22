import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TablesController {

    index({ view }: HttpContextContract) {
        let title:string = 'Table'

        return view.render('mazer.table', { title })
    }

	datatable({ view }: HttpContextContract){
		let title:string = 'DataTable';

		return view.render('mazer/table-datatable', { title });
	}
}
