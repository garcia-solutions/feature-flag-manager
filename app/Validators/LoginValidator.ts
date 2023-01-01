import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
	constructor(protected ctx: HttpContextContract) {}

	public schema = schema.create({
		email: schema.string(),
		password: schema.string()
	})

	public messages: CustomMessages = {}
}
