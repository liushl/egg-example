'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index() {
    const { ctx, app } = this;
    console.log(ctx.state.user);
    // TODO 验证

    ctx.body = { code: 0, msg: '验证成功' };
  }

  async login() {
    const { ctx, app } = this;
    // 获取用户端传递过来的参数
    const { id } = ctx.request.query;
    const user = await this.ctx.service.user.getUserById(id);
    if (user) {
      // 生成token
      const token = app.jwt.sign({ id }, app.config.jwt.secret);
      ctx.body = {
        code: 200,
        message: '请求成功',
        data: { name: user.name },
        token,
      };
    }
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = UserController;
