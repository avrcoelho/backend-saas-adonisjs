'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Team {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    const slug = request.header('TEAM')

    let team = null

    // pega o usuario que esta logado
    if (slug) {
      team = await auth.user.teams().where('slug', slug).first()
    }

    if (!team) {
      return response.status(401).send()
    }

    // setando uma nova variavel dentro do request. Todos os controles chamados depois desse middleware vai ter essa variavel
    auth.user.currentTeam = team.id
    request.team = team
    // call next to advance the request
    await next()
  }
}

module.exports = Team
