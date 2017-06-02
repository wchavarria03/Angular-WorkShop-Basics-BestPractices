(function() {
  'use strict';

  var directiveId = 'myTable';
  angular
    .module('app')
    .directive(directiveId, function () {
        return {
          scope: {
            data: '=',
            headers: '=',
            fields: '='
          },
          bindToController: true,
          restrict: 'E',
          controller: 'MyTableController',
          controllerAs: 'vm',
          templateUrl: 'app/directives/my-table/my-table.html'
        };
    });
})();
