'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.resources('topics', '/api/v2/topics', app.controller.topics);

  app.router.get('/logout', 'user.logout');
};
