'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.security = {
  csrf: {
    headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
  },
};

// mysql数据库开启
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
