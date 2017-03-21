
var user = require('../controllers/users')

function routes(app) {

  app.get('/api/something', user.something)

}

module.exports = routes
