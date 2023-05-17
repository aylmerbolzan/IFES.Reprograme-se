const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './empresa.sqlite'
})
module.exports = sequelize;