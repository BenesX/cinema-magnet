'use strict';

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1540977031823_4949';

	// add your config here
	config.middleware = ['errorHandler'];

	config.dyttReptileSite = 'https://www.dytt8.net';

	config.dyttSearchReptileSite = 'http://s.ygdy8.com/plus/so.php'

	config.xh127ReptileSite = 'http://www.xh127.com';

	config.movieDogReptileSite = 'https://www.dydog.org';

	config.sunMovieReptileSite = 'http://www.ygdy8.com';

	config.redis = {
		client: {
			host: process.env.EGG_REDIS_HOST || '127.0.0.1',
			port: process.env.EGG_REDIS_PORT || 6379,
			password: process.env.EGG_REDIS_PASSWORD || '',
			db: process.env.EGG_REDIS_DB || '0'
		}
	};

	config.bodyParser = {
		jsonLimit: '10mb',
		formLimit: '10mb'
	};

	config.security = {	
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		domainWhiteList: ['http://localhost:8080']
	};

	config.cors = {
		origin: '*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
	}

	return config;
};
