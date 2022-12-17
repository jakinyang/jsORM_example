const { poolDataBase } = require('../connection')

// Use the newly instance of the Pool class
// The 'poolDataBase' object to query the database
poolDataBase.query(`
  SELECT * FROM cheeses WHERE name = 'Gouda';
`)
  // .query returns a promise we can consume with a .then and a .catch
  .then(data => {
    console.log(data.rows[0]);
    // This will return {name: 'gouda', origin: 'Netherlands'}
  })
  .catch(error => {
    console.log(error.message);
  });