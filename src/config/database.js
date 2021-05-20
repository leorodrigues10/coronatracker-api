const Sequelize = require('sequelize');


const connection = new Sequelize('corona_tracker', 'root', 'e49vl6wkcy',{
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = connection;