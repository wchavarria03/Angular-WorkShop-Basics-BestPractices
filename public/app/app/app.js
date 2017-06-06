(function() {
    'use strict';

    angular.module('app', [
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module('app').config( ['$stateProvider','$urlRouterProvider', Config ]);

    function Config ( $stateProvider, $urlRouterProvider ){
        $urlRouterProvider.otherwise('/app/dashboard');
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
            .state('app',{
                url:'/app',
                templateUrl:'/App/app/app.html',
                controller:'AppController',
                controllerAs:'app',
                abstract: true
            })
            .state('app.dashboard',{
                url:'/dashboard',
                templateUrl:'/App/dashboard/dashboard.html',
                controller:'DashboardController',
                controllerAs:'Dashboard'
            })
            .state('app.users',{
              url:'/users',
              templateUrl:'/App/users/users.html',
              controller:'UsersController',
              controllerAs:'Users'
            });
    }

    angular.module('app').run(['$rootScope', '$state', LoginValidation]);

    function LoginValidation($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
            if (toState.name == 'app.dashboard' && !loggedUser) {
              event.preventDefault();
              $state.go('login');
            }
            else if((toState.name == 'login' || toState.name == 'signup') && loggedUser) {
              event.preventDefault();
              $state.go('app.dashboard');
            }
          });
    }

    angular.module('app').filter('propsFilter', CustomFilter);

    function CustomFilter() {
        return function(items, search) {
            var out = [];
            var model = ['id','name','email','body'];
            if (angular.isArray(items) && search !== ""){
                var splitSearch = search.toLowerCase().split(' ');
                splitSearch.forEach(function splitSearchForEach(searchText) {
                    if (out.length) {
                        items = out;
                    }
                    items.forEach(function itemsForEach(item){
                        var itemMatches = false;
                        for (var i = 0; i < model.length; i++) {
                            var prop = model[i];
                            if(item[prop] && item[prop].toString().toLowerCase().indexOf(searchText) !== -1 ){
                                itemMatches = true;
                                break;
                            }
                        }
                        if (itemMatches) {
                            var existItem = out.some(function checkItemPushed(outItem) {
                                return outItem.id == item.id;
                            });
                            if (!existItem) {
                                out.push(item);
                            }
                        } else {
                            out = out.filter(function (e) {
                                return e.id !== item.id ? item : null;
                            })
                        }
                    });
                });
            }else{
                out = items;
            }
            return out;
      };
    }


})();
