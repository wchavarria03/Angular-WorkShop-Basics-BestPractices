
(function () {
    'use strict';
    var controllerId = 'SignupController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope','SignupService','$state', SignUpController]);

    function SignUpController($scope,SignupService,$state) {
            var vm = this;

            vm.signup = function signup(user) {
              SignupService.signup(user);
              vm.user={};
              $state.go('login');
            }
        }
})();
