
angular.module('myApp')
.factory('TodoFactory', ['$http', function($http) {

  var todos = []
  var factory = {}

  factory.getAllTodos = function(userId, callback) {
    $http.get(`/api/getAllTodos/${userId}`)
      .then(function(response) {
        var data = response.data
        todos = data.todos
        callback(todos)
      })
  }

  factory.addTodo = function(todoData, userId, callback) {
    $http.post('/api/addTodo', { userId, todoData })
      .then(function(response) {
        var data = response.data
        todos = data.todos
        callback(null, todos)
      })
  }

  return factory

}])
