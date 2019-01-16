'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/' ,controller.home.index);
  
  router.get('/movie/query/:type/:page', middleware.movieCache(), controller.movie.index);

  router.get('/movie/search/:keyword', middleware.movieCache(), controller.movie.search);

  router.post('/magic/toexcel', controller.magic.taobaoToExcel);
};
