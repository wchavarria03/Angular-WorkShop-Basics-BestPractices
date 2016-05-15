(function() {
    'use strict';

    var serviceId = 'DashboardService';
    angular
        .module('app')
	    .service(serviceId, ['$http',DashboardService ]);

    function DashboardService( $http ) {

        this.getUsers = function getUsers(){
            // use $http to get users from http://jsonplaceholder.typicode.com/users
            // and return it
        }

    };

})();
