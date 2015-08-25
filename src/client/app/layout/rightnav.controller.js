(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('RightController', RightController);

  RightController.$inject = ['$mdSidenav', 'logger'];
  /* @ngInject */
  function RightController($mdSidenav, logger) {
    var vm = this;

    vm.close = function() {
      $mdSidenav('right').close()
        .then(function() {
          logger.log('close RIGHT is done');
        });
    };
  }
})();
