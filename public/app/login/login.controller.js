(function() {
    'use strict';

    var controllerId = 'LoginController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope', LoginController ]);

    function LoginController($scope) {
            var vm = this;

            vm.title = "Login Page";

            vm.login = function login(user,password) {
                var credentials = {
                    user: user,
                    password: password
                };
              //call login service and validate response
            };
        }
})();
