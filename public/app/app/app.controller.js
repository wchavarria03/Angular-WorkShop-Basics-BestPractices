(function() {
    'use strict';

    var controllerId = 'AppController';
    angular
        .module('app')
        .controller(controllerId, ['$state', AppController ]);

    function AppController($state) {
        var vm = this;
        vm.text = 'testing';
        
        vm.gotoUsers = function () {
          $state.go('app.users');
        };

        vm.gotoDashboard = function () {
          $state.go('app.dashboard');
        };

        vm.logOut = function logOut() {
            localStorage.removeItem("loggedUser");
            $state.go('login');
        };
      }
})();
