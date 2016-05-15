(function() {
    'use strict';

    var serviceId = 'SignupService';
    angular
        .module('app')
	    .service(serviceId, ['$http',SignupService ]);

    function SignupService( $http ) {
        this.users=[];

        this.getUsers = function getUsers(){
            return this.users;
        }
        this.signup = function signup(user) {
            this.users.push(user);
        }
    };

})();
