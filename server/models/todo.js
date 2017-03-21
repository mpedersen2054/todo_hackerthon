
var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
  text: { type: String, required: true, min: 3 },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema)
