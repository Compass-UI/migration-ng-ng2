(function() {
  'use strict';

  angular
    .module('app.unit')
    .controller('UnitController', UnitController);

  UnitController.$inject = ['logger'];
  /* @ngInject */
  function UnitController(logger) {
    var vm = this;
    vm.title = 'Unit';

    activate();

    function activate() {
      logger.info('Activated Unit View');
    }
  }
})();
