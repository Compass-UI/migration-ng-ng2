(function() {
  'use strict';

  angular
    .module('app.unit')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'unit',
        config: {
          url: '/unit',
          templateUrl: 'app/unit/unit.html',
          controller: 'UnitController',
          controllerAs: 'vm',
          title: 'Unit',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Unit'
          }
        }
      }
    ];
  }
})();
