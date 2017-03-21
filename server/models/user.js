
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 3 },
  _todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('User', userSchema)
