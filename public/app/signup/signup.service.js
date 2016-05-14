(function() {
    'use strict';

    var serviceId = 'SignupService';
    angular
        .module('app')
		    .service(serviceId, ['$http',SignupService ]);

    function SignupService( $http ) {
        this.signup = function signup(user) {
            //Call backend and return response
        }
    };

})();
