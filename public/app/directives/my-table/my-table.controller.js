(function() {
  'use strict';

  var controllerId = 'MyTableController';
  angular
    .module('app')
    .controller(controllerId, [ MyTableController]);

  function MyTableController() {
    var vm = this;

    vm.update = function update() {
      vm.updating = true;
    };

    vm.save = function save() {
      vm.updating = false;
    };
  }
})();
