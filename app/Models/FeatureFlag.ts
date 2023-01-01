import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FeatureFlag extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public number: number

  @column()
  public description: string

  @column()
  public active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}
