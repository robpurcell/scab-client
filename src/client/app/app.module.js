(function() {
  'use strict';

  angular
    .module('app', [
      /* Shared modules */
      'app.core',
      'app.layout'

      /* Feature modules */
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'app/views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
