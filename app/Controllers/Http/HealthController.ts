import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HealthController {

	public async HealthCheck({}: HttpContextContract) {
		return { status: 200 }
	}
}