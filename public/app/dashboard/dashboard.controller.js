(function() {
    'use strict';

    var controllerId = 'DashboardController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope','DashboardService','$state', DashboardController ]);

    function DashboardController($scope,DashboardService,$state) {
        var vm = this;
        vm.user = JSON.parse(localStorage.getItem("loggedUser"));
        vm.users=[];

        vm.logOut = function logOut(){
            localStorage.removeItem("loggedUser");
            $state.go('login');
        }

        function getUsers(){
            //call DashboardService
            // resolve the promise returned by DashboardService
        }

        getUsers();
      }
})();
