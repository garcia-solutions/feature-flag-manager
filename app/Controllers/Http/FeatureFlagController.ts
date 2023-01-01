import { OperationTypeEnum } from 'App/Enums/OperationTypeEnum'
import FeatureFlagService from 'App/Services/FeatureFlagService'
import OperationLogService from 'App/Services/OperationLogService'
import FeatureFlagActiveValidator from 'App/Validators/FeatureFlagActiveValidator'
import FeatureFlagValidator from 'App/Validators/FeatureFlagValidator'

export default class FeatureFlagController {
    private featureFlagService = new FeatureFlagService()
    private operationLogService = new OperationLogService()

    public async List({ response }) {
        let featureFlags = await this.featureFlagService.listFeatureFlags();
        return response.ok({ status: 200, featureFlags: featureFlags })
    }

    public async GetFeatureFlag({ params, response }) {
        try {
            let featureFlag = await this.featureFlagService.getFeatureFlag(params.number)
            return response.ok({ status: 200, featureFlag: featureFlag })
        } catch {
            return response.badRequest ({ status: 404 })
        }
    }

    public async AddFeatureFlag({ auth, request, response }) {
        const { number, description } = await request.validate(FeatureFlagValidator)

        try {
            let featureFlag = await this.featureFlagService.newFeatureFlag(number, description);
            await this.operationLogService.createLog(auth.user.id, OperationTypeEnum.FEATURE_FLAG_CREATION, null, featureFlag.id)
            return response.ok({ status: 200, message: "Feature Flag created", number: number })
          } catch {
            return response.unauthorized({ message: 'Feature Flag already created' })
        }
    }

    public async ChangeFeatureFlagStatus({ auth, request, response }) {
        const { number, active } = await request.validate(FeatureFlagActiveValidator)
        
        try {
            let featureFlag = await this.featureFlagService.changeFeatureFlagStatus(number, active)
            await this.operationLogService.createLog(auth.user.id, active ? OperationTypeEnum.FEATURE_FLAG_ENABLE : OperationTypeEnum.FEATURE_FLAG_DISABLE, null, featureFlag.id)
            return response.ok({ status: 200, message:"Feature Flag status changed" })
        } catch {
            return response.badRequest({ status: 400, message: "Feature Flag not found" })
        }

    }
}