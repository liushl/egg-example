'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const type = ctx.query.type || 'keji';
    const newsList = await ctx.service.news.list(type);
    await this.ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
