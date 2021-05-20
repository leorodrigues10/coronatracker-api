const Sequelize = require('sequelize');
const connection = require('../config/database');



const Islands = connection.define('islands', {

  name: Sequelize.STRING

});

Islands.sync({force: true});


module.exports = Islands;

