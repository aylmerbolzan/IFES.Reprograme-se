const Sequelize = require("sequelize");
const database = require("../db/db");

const Video = database.define(
  "video",
  {
    id_filme_tipo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genero: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link_sinopse: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  { database, modelname: "video", tableName: "videos" }
);

module.exports = Video;
