'use strict'

class Project {
  // faz todo os erros retornarem de uma vez
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = Project
