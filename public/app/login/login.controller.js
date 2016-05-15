(function() {
    'use strict';

    var controllerId = 'LoginController';
    angular
        .module('app')
        .controller(controllerId, [ '$scope','LoginService', LoginController ]);

    function LoginController($scope,LoginService) {
        var vm = this;

        vm.title = "Login Page";

        vm.login = function login(user,password) {
            vm.error=false;
            var credentials = {
                username: user,
                password: password
            };
            LoginService.login(credentials);
            var user = JSON.parse(localStorage.getItem("loggedUser"));
            if(!user){
                vm.error=true;
            }else{
                vm.user={};
                alert("Welcome "+ user.fullName);
              //go to X view
            }
          };
      }
})();
