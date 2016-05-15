(function () {
    'use strict';

    var serviceId = 'LoginService';
    angular
        .module('app')
	    .service(serviceId, [ '$http','SignupService', LoginService]);

    function LoginService( $http, SignupService ) {
        this.login = function login(credentials) {
            var users = SignupService.getUsers();
            var found=false;
            users.forEach(function(u){
                if(u.username==credentials.username && u.password==credentials.password){
                    localStorage.setItem("loggedUser",JSON.stringify(u));
                    found=true;
                }
            });
            if(!found){
                localStorage.removeItem("loggedUser");
            }
        }
    }
})();
