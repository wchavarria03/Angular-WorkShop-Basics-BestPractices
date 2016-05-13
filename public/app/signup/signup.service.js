(function () {
    var serviceId = 'SignupService';
    angular.module('app')
		  .service(serviceId, [
        '$http',
        function (
          $http
        ) {
          this.signup = function signup(user) {
 			        //Call backend and return response
          }
        ]);
})();
