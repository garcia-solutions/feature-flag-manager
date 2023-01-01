import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { OperationTypeEnum } from 'App/Enums/OperationTypeEnum'

export default class extends BaseSchema {
  protected tableName = 'operation_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.enum('internal_name', Object.values(OperationTypeEnum)).notNullable()
      table.string('description').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
