'use strict'

class Invite {
  // faz todo os erros retornarem de uma vez
  get validateAll () {
    return true
  }

  get rules () {
    return {
      invites: 'required|array',
      'invites.*': 'required|email'
    }
  }
}

// invites.*' cada um dos invites. Entra nas porpiiedade do array, verifica se tem um e se ;e email

module.exports = Invite
