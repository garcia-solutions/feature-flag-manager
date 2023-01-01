import { OperationTypeEnum } from "App/Enums/OperationTypeEnum"
import OperationLog from "App/Models/OperationLog"
import OperationType from "App/Models/OperationType";
import { DateTime } from "luxon";

export default class OperationLogService {

    public async createLog(userAuthorId: number, operationTypeEnum: OperationTypeEnum, featureFlagId: number | null, userOperationId: number | null): Promise<OperationLog> {
        let operationTypeId = await OperationType.query().where('internal_name', operationTypeEnum).firstOrFail();

        let operationLog = await OperationLog.create({
            createdAt: DateTime.now(),
            userAuthorId: userAuthorId,
            operationTypeId: operationTypeId.id,
            featureFlagId: featureFlagId ? featureFlagId : null,
            userOperationId: userOperationId ? userOperationId : null
        })

        return operationLog
    }
    
}