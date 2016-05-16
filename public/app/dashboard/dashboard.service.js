(function() {
    'use strict';

    var serviceId = 'DashboardService';
    angular
        .module('app')
	    .service(serviceId, ['$http',DashboardService ]);

    function DashboardService( $http ) {

        this.getComments = function getComments(){
            return $http.get('http://jsonplaceholder.typicode.com/comments');
        }

    };

})();
