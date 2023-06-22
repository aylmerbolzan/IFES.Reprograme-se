// Bibliotecas e módulos
const Sequelize = require("sequelize");

// Configurações do banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mercado.sqlite",
});

// Tratando possíveis erros
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso");
} catch (erro) {
  console.log("Erro ao conectar com o banco de dados", erro);
}

module.exports = sequelize;
