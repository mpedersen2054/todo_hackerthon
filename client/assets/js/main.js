
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'TodosCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
