(function() {
    'use strict';

    var controllerId = 'UsersController';
    angular
        .module('app')
        .controller(controllerId, ['UsersService','$state', UsersController ]);

    function UsersController(UsersService, $state) {
        var vm = this;
        vm.user = JSON.parse(localStorage.getItem("loggedUser"));
        vm.users = [];
        vm.loading = false;
        vm.updating = false;
        vm.search = "";

        vm.update = function update() {
            vm.updating = true;
        }

        vm.save = function save() {
            vm.updating = false;
        }

        vm.logOut = function logOut() {
            localStorage.removeItem("loggedUser");
            $state.go('login');
        }

        function getUsers() {
            vm.loading = true;
          UsersService.getUsers()
                .then(function(response) {
                    vm.users = response.data.slice(0,200);
                    vm.loading = false;
                });
        }

        getUsers();
      }
})();
