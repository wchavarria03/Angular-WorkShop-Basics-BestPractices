(function() {
    'use strict';

    var serviceId = 'DashboardService';
    angular
        .module('app')
	    .service(serviceId, ['$http',DashboardService ]);

    function DashboardService( $http ) {

        this.getUsers = function getUsers(){
            return $http.get('http://jsonplaceholder.typicode.com/users');
        }

    };

})();
