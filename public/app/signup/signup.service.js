(function() {
    'use strict';

    var serviceId = 'SignupService';
    angular
        .module('app')
	    .service(serviceId, ['$http',SignupService ]);

    function SignupService( $http ) {
        this.users=[
            {
                "fullName":"Daniel Berrocal",
                "username":"jdberrocal1",
                "email":"jdanielb1992@gmail.com",
                "phone":"86899169",
                "password":"12345"
            }
        ];

        this.getUsers = function getUsers() {
            return this.users;
        }

        this.signup = function signup(user) {
            this.users.push(user);
        }
    };

})();
