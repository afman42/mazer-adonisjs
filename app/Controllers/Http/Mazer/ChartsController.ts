import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChartsController {

    chartJs({ view }: HttpContextContract)
	{
		let title:string = 'ChartJS';

		return view.render('mazer.ui-chart-chartjs', { title });
	}

	apexCharts({ view }: HttpContextContract)
	{
		let title:string = 'Apexcharts';

		return view.render('mazer.ui-chart-apexcharts', { title });
	}
}
