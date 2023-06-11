const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = require("./db/db");
const Funcionario = require("./model/funcionarioModel");
const funcionarioController = require("./controller/funcionarioController");

//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}

app.get("/", (req, res) => {
  return res.json({ message: "Olá mundo!" });
});

//POST - CADASTRAR

app.post("/Cadastrar", funcionarioController.FuncionarioCreate);

//GET - LISTAR

app.get("/Funcionarios", funcionarioController.FuncionarioListar);

//PUT - ATUALIZAR

app.put("/Funcionarios/:id", funcionarioController.FuncionarioUpdate);

//DELETE - DELETAR

app.delete("/Funcionarios/:id", funcionarioController.FuncionarioDelete);

app.listen(3000);