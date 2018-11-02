'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/' ,controller.home.index);
  
  router.get('/movie/:type/:page', middleware.movieCache(), controller.movie.index);
};
