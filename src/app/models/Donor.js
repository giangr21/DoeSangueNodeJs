const db = require('../../config/db')
const {  date } = require('../../lib/utils')

module.exports = {
    all(callback){
        db.query(`
        SELECT * FROM donor`, function(err, results){
            if(err) throw "Database Error!"

            callback(results.rows)
            

        })
    },
    create(data, callback){
        const query = `
            INSERT INTO donor (
                name,
                email,
                blood,
                created_at
            ) VALUES ($1,$2,$3,$4)
        `
        const values = [
            data.name,
            data.email,
            data.blood,
            date(Date.now()).iso
        ]
        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`
            callback(results.rows)
        })
    }
}