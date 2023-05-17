const Sequelize = require('sequelize');
const database = require('../db');

const Cliente = database.define('cliente',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nascimento: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Cliente;