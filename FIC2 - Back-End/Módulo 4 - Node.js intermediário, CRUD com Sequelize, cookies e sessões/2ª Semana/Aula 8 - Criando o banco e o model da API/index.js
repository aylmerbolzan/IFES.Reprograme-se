const express = require("express");
const app = express();
const database = require("./db/db");
const Funcionario = require("./model/funcionarioModel")

//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}

app.get("/", (req, res) => {
  return res.json({ message: "Olá mundo!" });
});

app.listen(3000);
