(function() {
  'use strict';

  angular
    .module('app.core', [
      /* Angular modules */
      'ngAnimate',
      'ngCookies',
      'ngMaterial',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',

      /* Cross-app modules */
      'blocks.exception',
      'blocks.logger',
      'blocks.router',

      /* 3rd-party modules */
      'ui.router'
    ]);
})();
