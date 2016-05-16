(function() {
    'use strict';

    var controllerId = 'DashboardController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope','DashboardService','$state', DashboardController ]);

    function DashboardController($scope,DashboardService,$state) {
        var vm = this;
        vm.user = JSON.parse(localStorage.getItem("loggedUser"));
        vm.comments=[];
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

        function getComments(){
            vm.loading=true;
            DashboardService.getComments()
                .then(function(response){
                    vm.comments=response.data;
                    vm.loading=false;
                });
        }

        getComments();
      }
})();
