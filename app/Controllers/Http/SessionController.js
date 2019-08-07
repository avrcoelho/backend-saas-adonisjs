'use strict'

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    // gera um token baseado no email e na senha
    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
