
var Todo = require('../models/todo')
var User = require('../models/user')

var controller = {

  getAllTodos: function(req, res) {
    User.findOne({ _id: req.params.uid })
    .populate('_todos')
    .exec(function(err, user) {
      if (!err && user) {
        res.json({ success: true, todos: user._todos })
      }
    })
  },

  addTodo: function(req, res) {
    var userId = req.body.userId
    var todoData = req.body.todoData

    User.findOne({ _id: userId })
    .populate('_todos')
    .exec(function(err, user) {
      if (!err && user) {
        // console.log(user)
        var newTodo = new Todo(todoData)
        newTodo._user = user._id
        newTodo.save(function(err, todo) {
          user._todos.push(todo)
          user.save(function(err) {
            res.json({ success: true, todos: user._todos })
          })
        })
      }
    })
  },

  toggleCompleted: function(req, res) {
    var userId = req.session.user._id
    var todoId = req.body._id

    Todo.findOne({ _id: req.body._id })
    .exec(function(err, todo) {
      todo.completed = !todo.completed
      todo.save(function(err2, todo) {
        if (err2) {
          console.log('errrrrrror', err2)
        } else {
          User.findOne({ _id: userId })
          .populate('_todos')
          .exec(function(err, user) {
            res.json({ success: true, todos: user._todos })
          })
        }
      })
    })
  },

  delete: function(req, res) {
    res.send('hi')
  }

}

module.exports = controller
