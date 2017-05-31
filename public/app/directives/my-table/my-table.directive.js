(function() {
  'use strict';

  var directiveId = 'TableController';
  angular
    .module('app')
    .directive(directiveId, function () {
        return {
          scope: {
            data: '=',
            headers: '=',
            field: '='
          },
          restrict: 'E',
          controller: 'MyTableController',
          controllerAs: 'vm',
          templateUrl: 'my-table.html'
        };
    });
})();
