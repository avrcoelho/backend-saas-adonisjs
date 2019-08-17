'use strict'

class Team {
  // faz todo os erros retornarem de uma vez
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = Team
