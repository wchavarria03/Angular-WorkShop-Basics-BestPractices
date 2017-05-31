(function() {
    'use strict';

    var serviceId = 'UsersService';
    angular
        .module('app')
	    .service(serviceId, ['$http',UsersService ]);

    function UsersService( $http ) {

        this.getUsers = function getUsers() {
            return $http.get('http://jsonplaceholder.typicode.com/users');
        }

    };

})();
