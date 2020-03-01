const { Pool } = require("pg")

module.exports = new Pool({
    user: 'Gian',
    host: 'localhost',
    port: 5432,
    database: 'doe_sangue'
})