
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 3 },
  _tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('User', userSchema)
