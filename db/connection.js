// Require node-postgres ("pg")
// Use destructuring syntax 
// to extract the "Pool" class
const { Pool } = require('pg');

// Require seequelize
const { Sequelize } = require('sequelize');

// Here we are creating a new sequelize object instance from the Sequelize class
// We are handing it an options object with all of the configurations we need to access our particular database
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  username: 'cheesepartyhost',
  password: 'cheeseforever',
  database: 'cheeseparty',
  port: '5432',
})


// All sequelize methods are async and return promises
// So methods like .then, .catch can be used out of the box
// Testing connection
sequelize.authenticate()
  .then((res) => {
    console.log("Sequelize connection to cheeseparty database success!");
    sequelize.close();
  })
  .catch((error) => {
    console.error("Sequelize unable to connect to cheeseparty database: ", error);
    sequelize.close();
  });

  module.exports = { sequelize };