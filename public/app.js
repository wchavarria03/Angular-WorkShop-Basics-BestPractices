(function () {
  'use strict';

  angular.module('app', [
    'ui.bootstrap',
    'ui.router'
  ]);

  angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    function(
      $stateProvider,
      $urlRouterProvider
    ){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('login',{
          url:'/login',
          templateUrl:'/App/login/login.html',
          controller:'loginController',
          controllerAs:'login'
        })
        .state('signup',{
          url:'/signup',
          templateUrl:'/App/signup/signup.html',
          controller:'signupController',
          controllerAs:'signup'
        })
    }
  ]);

})();
