const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('uptasknode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
