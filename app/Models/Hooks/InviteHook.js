'use strict'
const User = use('App/Models/User')

const InviteHook = exports = module.exports = {}

InviteHook.sendInvitationEmail = async (invite) => {
  const { email } = invite
  const invited = await User.findBy('email', email)

  if (invited) {
    // /relacionamento dos times do usuario
    // attach: coloca um novo time para o usuario
    await invited.teams().attach(invite.team_id)
  } else {
    console.log('criar conta')

    //  envio de email_
  }
}
