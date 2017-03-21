
angular.module('myApp')
.controller('LoginCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.loginForm = {}
  $scope.user = {}

  $scope.loginUser = function() {
  	console.log($scope.loginForm);
  	UserFactory.loginUser($scope.loginForm.username, function(data){
  		console.log('loginCtrl', data);
  		$location.url('/dashboard');
  	})
  }

}])
