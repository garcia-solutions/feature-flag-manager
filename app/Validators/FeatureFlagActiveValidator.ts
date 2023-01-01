import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FeatureFlagActiveValidator {
	constructor(protected ctx: HttpContextContract) {}

	public schema = schema.create({
		number: schema.number(),
		active: schema.boolean()
	})

	public messages: CustomMessages = {}
}
