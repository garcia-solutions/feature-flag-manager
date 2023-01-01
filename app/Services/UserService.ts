import { Exception } from "@adonisjs/core/build/standalone"
import User from "App/Models/User"

export default class UserService {
    
    public async listUser(): Promise<User[]> {
        return await User.all()
    }

    public async newUser(email: string, password: string): Promise<User> {
        let user = await User.query().where('email', email).first()
        if (user) {
            throw new Exception("User already registered", 400)
        }
        
        user = new User()
        user.email = email
        user.password = password
        return await user.save()
    }

    public async changeUserStatus(email: string, active: boolean): Promise<User> {
        let user = await User.query().where('email', email).first()
        if (!user) {
            throw new Exception("User not found", 404)
        }
        
        if (user.active === active) {
            return user;
        }

        user.active = active
        await user.save()
        return user
    }
}