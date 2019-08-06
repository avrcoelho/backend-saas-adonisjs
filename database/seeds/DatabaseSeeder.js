'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'André Coelho',
      email: 'andrevrcoelho@hotmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Focus',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
