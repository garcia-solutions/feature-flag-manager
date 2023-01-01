import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FeatureFlagValidator {
	constructor(protected ctx: HttpContextContract) {}

	public schema = schema.create({
		number: schema.number(),
        description: schema.string()
	})

	public messages: CustomMessages = {}
}
