'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.get('/user', jwt, controller.user.index);
  router.get('/user/login', controller.user.login);
  router.get('/news', controller.news.list);
  router.resources('topics', '/api/v2/topics', app.controller.topics);
};
