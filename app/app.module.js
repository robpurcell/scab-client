'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # Client App
 *
 * Main module of the application.
 */
angular
  .module('app', [

    /* Shared modules */
    'app.core'

    /* Feature modules */
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
