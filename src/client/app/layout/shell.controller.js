(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['config', '$mdSidenav', '$mdUtil', 'logger'];
  /* @ngInject */
  function ShellController(config, $mdSidenav, $mdUtil, logger) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    vm.toggleLeft = buildToggler('left');
    vm.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function() {
            logger.log('toggle ' + navID + ' is done');
          });
      }, 200);
      return debounceFn;
    }

    activate();

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
    }

  }
})();
