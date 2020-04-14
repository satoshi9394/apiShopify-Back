module.exports = (app) => {

  const store = require('../controllers/storeController')



  app.route('/store/:id')
    .get(store.read_a_store)
}