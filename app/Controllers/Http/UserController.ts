import UserService from 'App/Services/UserService'
import UserActiveValidator from 'App/Validators/UserActiveValidator'
import LoginValidator from 'App/Validators/LoginValidator'
import OperationLogService from 'App/Services/OperationLogService'
import { OperationTypeEnum } from 'App/Enums/OperationTypeEnum'

export default class UserController {
    private userService = new UserService()
    private operationLogService = new OperationLogService()

    public async List({ response }) {
        let users = await this.userService.listUser();
        return response.ok({ status: 200, users: users })
    }

    public async AddUser({ auth, request, response }) {
        const { email, password } = await request.validate(LoginValidator)
        
        try {
            let newUser = await this.userService.newUser(email, password)
            await this.operationLogService.createLog(auth.user.id, OperationTypeEnum.USER_CREATION, null, newUser.id)
            return response.ok({ status: 200, message:"User registered" })
        } catch {
            return response.badRequest({ status: 400, message: "User already registered" })
        }

    }

    public async ChangeUserStatus({ auth, request, response }) {
        const { email, active } = await request.validate(UserActiveValidator)
        
        try {
            let changedUser = await this.userService.changeUserStatus(email, active)
            await this.operationLogService.createLog(auth.user.id, active ? OperationTypeEnum.USER_ACTIVATION : OperationTypeEnum.USER_INACTIVATION, null, changedUser.id)
            return response.ok({ status: 200, message:"User status changed" })
        } catch {
            return response.badRequest({ status: 404, message: "User not found" })
        }

    }

}