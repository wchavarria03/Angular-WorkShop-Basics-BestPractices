(function() {
    'use strict';

    var serviceId = 'DashboardService';
    angular
        .module('app')
	    .service(serviceId, ['$http',DashboardService ]);

    function DashboardService( $http ) {

        this.getComments = function getComments(){
            // use $http to get comments from http://jsonplaceholder.typicode.com/comments
            // and return it
        }

    };

})();
