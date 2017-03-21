
var users = require('../controllers/users')

function routes(app) {

  //user routes
  app.post('/api/login', users.login);
  app.get('/api/logout', users.logout);
  app.get('/api/getUserSession', users.getUserSession);
}

module.exports = routes
