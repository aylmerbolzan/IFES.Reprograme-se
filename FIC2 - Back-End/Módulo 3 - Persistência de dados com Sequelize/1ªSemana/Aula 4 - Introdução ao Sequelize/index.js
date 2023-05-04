const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

(async () => {
  await sequelize.sync({
    force: true,
  });
})();
