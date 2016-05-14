
(function () {
    'use strict';
    var controllerId = 'SignupController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope', SignUpController]);

    function SignUpController($scope) {
            var vm = this;

            vm.title="SignUp Page";

            vm.signup = function signup(user) {

              //call signup service
            }
        }
})();
