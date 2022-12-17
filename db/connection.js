// Require node-postgres ("pg")
// Use destructuring syntax 
// to extract the "Pool" class
const { Pool } = require('pg');


// Create a new pool object from the pool class
// Pass a config objects with the details of our database
const poolDataBase = new Pool({
  host: 'localhost',
  user: 'cheesepartyhost',
  password: 'cheeseforever',
  database: 'cheeseparty',
  port: '5432'
});

module.exports = { poolDataBase };