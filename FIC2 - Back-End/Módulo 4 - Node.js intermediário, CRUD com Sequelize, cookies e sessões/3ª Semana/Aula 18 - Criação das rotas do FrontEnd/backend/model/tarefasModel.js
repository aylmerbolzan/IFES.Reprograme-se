const Sequelize = require("sequelize");
const database = require("../database/db");
const Usuario = require("./usuarioModel");

const Tarefa = database.define("tarefa", {
  id_tarefa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { database, modelname: "tarefa", tableName: "tarefas" });

module.exports = Tarefa;