(function() {
    var controllerId = 'signupController';
    angular.module('app').controller(controllerId, [
        '$scope',
        function ($scope) {
            var vm = this;

            vm.title="SignUp Page";

            vm.signup = function signup(user) {

              //call signup service 
            }
        }
    ]);
})();
