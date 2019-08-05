'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserTeam extends Model {
  // relacionamento para usuário
  user () {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = UserTeam
