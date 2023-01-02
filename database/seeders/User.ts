import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      email: 'root',
      password: Env.get('ROOT_PASSWORD'),
      active: true
    })
  }
}
