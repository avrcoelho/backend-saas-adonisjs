'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    // get data user
    const data = request.only(['name', 'email', 'password'])

    // search have a invite to user
    const teamsQuery = Invite.query().where('email', data.email)
    // pluck: traz dos os times que o suuario foi convidado
    const teams = await teamsQuery.pluck('team_id')

    // naõ foi convidado para nenhum time
    if (teams.length === 0) {
      return response.status(401).send({ message: "You're not invited to a any team" })
    }

    const user = await User.create(data)

    // coloca o usuario nos times obtidos no pluck
    await user.teams().attach(teams)

    await teamsQuery.delete()

    // ja autentica o usuario
    const token = await auth.attempt(data.email, data.password)

    return token
  }
}

module.exports = UserController
