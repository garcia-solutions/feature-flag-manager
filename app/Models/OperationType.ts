import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { OperationTypeEnum } from 'App/Enums/OperationTypeEnum'

export default class OperationType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public internalName: OperationTypeEnum

  @column()
  public description: string

}
