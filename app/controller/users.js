'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const { service } = this;
    return await service.user.create();
  }
}
module.exports = UserController;
