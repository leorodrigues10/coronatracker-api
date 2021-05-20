const Sequelize  = require('sequelize');
const connection = require('../config/database');
const Islands = require('./Islands');


const County = connection.define('counties', {
  name: Sequelize.STRING
});

County.belongsTo(Islands);
Islands.hasMany(County);

County.sync({force: false})

module.exports = County;