export default class HealthController {

	public async HealthCheck() {
		return { status: 200 }
	}
}