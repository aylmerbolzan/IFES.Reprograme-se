const express = require("express");
const app = express();

const database = require("./database/db");
const routes = require("./routes/routes");

const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefasModel")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

try {
  database.sync().then(() => {
  })
}
catch (err) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", err);
};


app.listen(3000, () => {
  console.log("Servidor rodando!")
});