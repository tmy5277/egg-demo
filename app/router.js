'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/home', 302);
  // home
  router.get('/home', controller.index.index);
  router.get('/home/:id', 'home.index');
};
