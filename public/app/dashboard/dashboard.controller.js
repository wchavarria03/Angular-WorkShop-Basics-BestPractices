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
        vm.loading=false;
        vm.updating=false;

        vm.update = function update(){
            vm.updating=true;
        }

        vm.save = function save(){
            vm.updating=false;
        }

        vm.logOut = function logOut(){
            localStorage.removeItem("loggedUser");
            $state.go('login');
        }

        function getUsers(){
            vm.loading=true;
            DashboardService.getUsers()
                .then(function(response){
                    vm.users=response.data;
                    vm.loading=false;
                });
        }

        getUsers();
      }
})();
