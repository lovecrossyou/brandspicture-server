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
  return config;
};
