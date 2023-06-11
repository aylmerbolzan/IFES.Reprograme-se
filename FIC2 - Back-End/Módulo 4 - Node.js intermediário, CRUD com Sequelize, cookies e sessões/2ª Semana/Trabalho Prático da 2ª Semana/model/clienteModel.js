const Sequelize = require("sequelize");
const database = require("../db/db");

const Cliente = database.define("cliente", {
  id_cliente: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  { database, modelname: "cliente", tableName: "clientes" }
);
module.exports = Cliente;
