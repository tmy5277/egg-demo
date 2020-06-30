'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    let { validator } = app
    let resError = validator.validate({
      id: {
        type: 'homeDetailParams'
      }
    }, ctx.params)
    console.log('debug resError', resError)
    ctx.body = app.apiResponseHandler(resError, `hi, ${ctx.params.id}`)
  }
}

module.exports = HomeController;
