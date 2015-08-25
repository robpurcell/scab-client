(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LeftController', LeftController);

  LeftController.$inject = ['$mdSidenav', 'logger'];
  /* @ngInject */
  function LeftController($mdSidenav, logger) {
    var vm = this;

    vm.close = function() {
      $mdSidenav('left').close()
        .then(function() {
          logger.log('close LEFT is done');
        });
    };
  }

})();
