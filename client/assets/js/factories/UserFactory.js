
angular.module('myApp')
.factory('UserFactory', ['$http', function($http) {

  var user = {}
  var factory = {}

  factory.getUserSession = function(callback){
  	$http.get('/api/getUserSession')
  		.then(function(res){
  			console.log(res, 'from factory');
  			
  		})
  }

  return factory

}])
