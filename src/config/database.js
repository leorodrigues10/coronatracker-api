const Sequelize = require('sequelize');


const connection = new Sequelize('corona_tracker', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = connection;