(function() {
    'use strict';

    angular.module('app', [
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module('app').config( ['$stateProvider','$urlRouterProvider', Config ]);

    function Config ( $stateProvider, $urlRouterProvider ){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'/App/login/login.html',
                controller:'LoginController',
                controllerAs:'login'
            })
            .state('signup',{
                url:'/signup',
                templateUrl:'/App/signup/signup.html',
                controller:'SignupController',
                controllerAs:'signup'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl:'/App/dashboard/dashboard.html',
                controller:'DashboardController',
                controllerAs:'Dashboard'
            });
    };

    angular.module('app').run(['$rootScope', '$state', LoginValidation]);

    function LoginValidation($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
            if (toState.name == 'dashboard' && !loggedUser) {
              event.preventDefault();
              $state.go('login');
            }
            else if((toState.name == 'login' || toState.name == 'signup') && loggedUser) {
              event.preventDefault();
              $state.go('dashboard');
            }
          });
    }

})();
