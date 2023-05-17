const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cliente.sqlite'
})
module.exports = sequelize;