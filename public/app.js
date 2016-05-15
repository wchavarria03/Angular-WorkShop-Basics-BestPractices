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
            });
    };

})();
