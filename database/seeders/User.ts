import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import env from 'env'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      email: 'root',
      password: env.ROOT_PASSWORD,
      active: true
    })
  }
}
