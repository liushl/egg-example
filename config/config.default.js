/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_112233';
  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      // '.nj': 'nunjucks',
    },
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.middleware = [
    'robot',
    'errorHandler',
  ];
  // robot's configurations
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  // 只对 /api 前缀的 url 路径生效
  exports.errorHandler = {
    match: '/api',
  };
  // 添加 news 的配置项
  exports.news = {
    apiKey: '0768092ccb1e414d98fba3bb0ca4cd07',
    pageSize: 5,
    serverUrl: 'http://v.juhe.cn/toutiao/index',
  };

  return {
    ...config,
    ...userConfig,
  };
};
