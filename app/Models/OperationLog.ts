import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import OperationType from './OperationType'
import User from './User'
import FeatureFlag from './FeatureFlag'

export default class OperationLog extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public operationTypeId: number

  @column()
  public userAuthorId: number

  @column()
  public featureFlagId: number | null

  @column()
  public userOperationId: number | null

  @belongsTo(() => OperationType)
  public operationType: BelongsTo<typeof OperationType>

  @belongsTo(() => User)
  public userAuthor: BelongsTo<typeof User>

  @belongsTo(() => FeatureFlag)
  public featureFlag: BelongsTo<typeof FeatureFlag>

  @belongsTo(() => User)
  public userOperation: BelongsTo<typeof User>

}
