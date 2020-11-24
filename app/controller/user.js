'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index() {
    // 根据id查询用户信息
    const users = await this.ctx.service.user.getUserById(2);
    this.ctx.body = users;
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = UserController;
