(function() {
    'use strict';

    var controllerId = 'LoginController';
    angular
        .module('app')
        .controller(controllerId, ['LoginService', '$state', LoginController ]);

    function LoginController(LoginService,$state) {
        var vm = this;

        vm.login = function login(user,password) {
            vm.error = false;
            var credentials = {
                username: user,
                password: password
            };
            LoginService.login(credentials);
            var user = JSON.parse(localStorage.getItem("loggedUser"));
            if(!user) {
                vm.error = true;
            } else {
                vm.user = {};
                $state.go('dashboard');
                //go to X view
            }
          };
      }
})();
