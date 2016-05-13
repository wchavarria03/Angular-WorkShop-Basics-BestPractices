(function() {
    var controllerId = 'loginController';
    angular.module('app').controller(controllerId, [
        '$scope',
        function ($scope) {
            var vm = this;

            vm.title="Login Page";

            vm.login = function login(user,password) {
              var credentials={
                user:user,
                password:password
              }
              //call login service and validate response
            }
        }
    ]);
})();
