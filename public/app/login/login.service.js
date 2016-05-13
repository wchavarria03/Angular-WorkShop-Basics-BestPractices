
(function () {
    var serviceId = 'LoginService';
    angular.module('app')
		  .service(serviceId, [
        '$http',
        function (
          $http
        ) {
          this.login = function login(credentials) {
 			        //Call backend and return response
          }
        ]);
})();
