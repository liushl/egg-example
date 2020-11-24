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
  const config = exports = {
    // 数据库配置
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'admin1234',
        // 数据库名
        database: 'ops_example',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    // 添加 news 的配置项
    news: {
      apiKey: '0768092ccb1e414d98fba3bb0ca4cd07',
      pageSize: 5,
      serverUrl: 'http://v.juhe.cn/toutiao/index',
    },
    jwt: {
      secret: '123456', // token的加密串
    },
  };

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

  return {
    ...config,
    ...userConfig,
  };
};
