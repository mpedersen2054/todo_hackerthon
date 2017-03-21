
angular.module('myApp')
.factory('UserFactory', ['$http', function($http) {

  var user = {}
  var factory = {}

  factory.getUserSession = function(callback){
  	$http.get('/api/getUserSession')
  		.then(function(res){
  			console.log(res, 'from factory');
  			if(res.data.session.user){
  				callback(res.data.session.user);
  			}else {
  				callback(null);
  			}
  			
  		})
  }

  factory.loginUser = function(loginForm, callback){
  	$http.post('/api/login', {username: loginForm})
  		.then(function(res){
  			console.log(res);
  			if (res.data.success) {
  				user = res.data.user;
  				callback();
  			}
  		})
  }

  factory.logoutUser = function(callback){
  	$http.get('/api/logout')
  		.then(function(res){
  			if (res.data.success) {
  				callback(true);
  			}else {
  				callback(false);
  			}
  		})
  }

  return factory

}])
