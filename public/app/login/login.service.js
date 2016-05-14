
(function () {
    var serviceId = 'LoginService';
    angular
        .module('app')
		    .service(serviceId, [ '$http', LoginService]);

    function LoginService( $http ) {
        this.login = function login(credentials) {
            //Call backend and return response
        }
    }
})();
