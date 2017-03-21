
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
        console.log(user)
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
  }

}

module.exports = controller
