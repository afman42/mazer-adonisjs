import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MazersController {

    index({ view }: HttpContextContract) {
        let title:string = 'Dashboard'

        return view.render('mazer.index', { title })
    }
}
