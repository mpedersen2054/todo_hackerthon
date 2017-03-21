
var User = require('../models/user')

var controller = {

  something: function(req, res) {
    console.log('waddup user.something!')
    res.send('hello world!')
  }

}

module.exports = controller
