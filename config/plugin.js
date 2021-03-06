'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
//   nunjucks: {
//     enable: true,
//     package: 'egg-view-nunjucks',
//   },
// };
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.passport = {
  enable: true,
  package: 'egg-passport',
};
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

