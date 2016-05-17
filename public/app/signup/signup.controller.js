
(function () {
    'use strict';
    var controllerId = 'SignupController';
    angular
        .module('app')
        .controller(controllerId, ['SignupService','$state', SignUpController]);

    function SignUpController(SignupService,$state) {
        var vm = this;

        vm.signup = function signup(user) {
            SignupService.signup(user);
            vm.user = {};
            $state.go('login');
        }
    }
})();
