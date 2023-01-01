import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'

export default class AuthController {

    public async Authenticate({ auth, request, response }) {
        const { email, password } = await request.validate(LoginValidator)

        try {
            let user = await User.query()
                .where('email', email)
                .where('password', password)
                .where('active', true)
                .firstOrFail()
                
            const token = await auth.use('api').generate(user, { expiresIn: `${3000}seconds` })
            return response.ok({ status: 200, message: "User authorized", token: token })
          } catch {
            return response.unauthorized({ message: 'Invalid credentials' })
        }
    }

    public async Logout ({ auth, response }) {
        await auth.use('api').revoke()
        return response.ok({ status: 200 })
    }

}