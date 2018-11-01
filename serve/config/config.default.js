'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540977031823_4949';

  // add your config here
  config.middleware = ['errorHandler'];

  config.dyttReptileSite = 'http://www.dytt8.net';

  config.xh127ReptileSite = 'http://www.xh127.com'

  return config;
};
