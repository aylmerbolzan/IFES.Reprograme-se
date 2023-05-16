const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente',{
  id: {
    type: Sequelize.INTEGER,
    autoIncremento: true,
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
  telefone: Sequelize.STRING,
  allowNull: false
})

module_exports = Cliente;