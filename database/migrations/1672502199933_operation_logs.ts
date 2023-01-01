import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'operation_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true })
      table.integer('operation_type_id').references('operation_types.id').notNullable().index('ix_operation_log__operation_type')
      table.integer('user_author_id').references('users.id').notNullable().index('ix_operation_log__user_author')
      table.integer('feature_flag_id').references('feature_flags.id').index('ix_operation_log__feature_flag')
      table.integer('user_operation_id').references('users.id').index('ix_operation_log__user_operation')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
