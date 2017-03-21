
angular.module('myApp')
.controller('TodosCtrl', ['$scope', 'UserFactory', 'TodoFactory', '$location', function($scope, UserFactory, TodoFactory, $location) {

  $scope.loginForm = {}
  $scope.user = {}
  $scope.newTodo = {}
  // $scope.cbModel = { completed: false }
  $scope.todos = []

  function init() {
    UserFactory.getUserSession(function(user) {
      if (user) {
        $scope.user  = user
        TodoFactory.getAllTodos(user._id, function(todos) {
          $scope.todos = todos
        })
      } else {
        $location.url('/')
      }
    })
  }
  init()

  $scope.addTodo = function() {
    // validation here
    TodoFactory.addTodo($scope.newTodo, $scope.user._id, function(err, todos) {
      $scope.newTodo = {}
      $scope.todos = todos
    })
  }

  $scope.toggleCompleted = function(todo) {
    TodoFactory.toggleCompleted(todo, function(todos) {
      $scope.todos = todos
    })
  }

  $scope.logout = function() {
    UserFactory.logoutUser(function(success) {
      $scope.user = {}
      $location.url('/')
    })
  }

}])
