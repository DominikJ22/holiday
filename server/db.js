const Pool = require('pg').Pool
require('dotenv').config({ path: __dirname + '.env'})

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOSTNAME,
  port: process.env.PORT,
  database: process.env.DATABASE,
  url: process.env.URL
})

module.exports = pool