(function () {
    'use strict';

    var serviceId = 'LoginService';
    angular
        .module('app')
	    .service(serviceId, [ '$http','SignupService', LoginService]);

    function LoginService( $http, SignupService ) {
        this.login = function login(credentials) {
            var users = SignupService.getUsers();
            var found = false;
            found = users.some(function(user) {
                if(user.username == credentials.username && user.password == credentials.password) {
                    localStorage.setItem("loggedUser",JSON.stringify(user));
                    return true;
                }
            });
            if(!found) {
                localStorage.removeItem("loggedUser");
            }
        }
    }
})();
