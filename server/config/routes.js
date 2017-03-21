
var users = require('../controllers/users')
var todos = require('../controllers/todos')

function routes(app) {

  //user routes
  app.post('/api/login', users.login);
  app.get('/api/logout', users.logout);
  app.get('/api/getUserSession', users.getUserSession);

  // todos routes
  app.get('/api/getAllTodos/:uid', todos.getAllTodos)
  app.post('/api/addTodo', todos.addTodo)
  app.post('/api/toggleCompleted', todos.toggleCompleted)
  app.post('/api/deleteTodo', todos.delete)
}

module.exports = routes
