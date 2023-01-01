import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserActiveValidator {
	constructor(protected ctx: HttpContextContract) {}

	public schema = schema.create({
		email: schema.string(),
		active: schema.boolean()
	})

	public messages: CustomMessages = {}
}
