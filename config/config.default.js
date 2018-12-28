'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545355142711_7057';

  // add your config here
  config.middleware = [
    'robot',
  ];

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.multipart = {
    mode: 'file',
  };

  // mysql数据库配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'brand_mgr_unittest',
    password: '123456',
  };

  // 异常处理
  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      const res = JSON.stringify({
        status: '-1',
        message: err.name,
      })
      ctx.body = res;
      ctx.status = 500;
    },
    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      const res = JSON.stringify({
        status: '-1',
        message: err.name,
      })
      ctx.body = res;
      ctx.status = 500;
    },
  };

  return config;
};
