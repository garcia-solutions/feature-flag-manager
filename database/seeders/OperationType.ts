import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OperationTypeEnum } from 'App/Enums/OperationTypeEnum'
import OperationType from 'App/Models/OperationType'

export default class extends BaseSeeder {
  public async run () {
    await OperationType.createMany([
      {internalName: OperationTypeEnum.USER_CREATION, description: "Creation of a new user"},
      {internalName: OperationTypeEnum.USER_INACTIVATION, description: "Inactivation of a user"},
      {internalName: OperationTypeEnum.USER_ACTIVATION, description: "Activation of a user"},
      {internalName: OperationTypeEnum.FEATURE_FLAG_CREATION, description: "Creation of a feature flag"},
      {internalName: OperationTypeEnum.FEATURE_FLAG_ENABLE, description: "Enabling of a feature flag"},
      {internalName: OperationTypeEnum.FEATURE_FLAG_DISABLE, description: "Disabling of a feature flag"},
    ])
  }
}
