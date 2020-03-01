const express = require('express')
const routes = express.Router()
const donors = require('../src/app/controllers/donors')

routes.get('/', function(req, res){
    return res.redirect("/donors")
})

routes.get('/donors', donors.index)
routes.get('/donors/create', donors.create)
// routes.get('/donors', donors.show)
// routes.get('/donors/:id/edit', donors.edit)
routes.post("/donors", donors.post)
// routes.put("/donors", donors.put)
// routes.delete("/donors", donors.delete)

module.exports = routes