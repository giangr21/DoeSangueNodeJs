const { age, date } = require('../../lib/utils')
const Donor = require('../models/Donor')

module.exports = {
    index(req,res){
        Donor.all(function(donors){
            if(!donors) return res.send("Donor not found!")

            return res.render("donors/index", { donors })
        })
    },
    create(req, res){
        return res.render('donors/create')
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        Donor.create(req.body, function() {
            return res.redirect("/")
        })
    }
    
}
