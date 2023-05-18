/// criando o servidor
const express = require("express");
const app = express();
const porta = 9443;

const bodyParser = require("body-parser");
const database = require("./db");
const Cliente = require("./models/cliente");
const Fornecedor = require("./models/fornecedor");

// Setar os valores da view e engine
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Definindo rotas
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cadcliente", function (req, res) {
  res.render("formCliente");
});

app.get("/cadfornecedor", function (req, res) {
  res.render("formFornecedor");
});

app.post("/addcliente", function (req, res) {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone,
  }).then(function () {
    res.render("cadastroSucesso");
  });
});

app.post("/addfornecedor", function (req, res) {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
  }).then(function () {
    res.render("cadastroSucesso");
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});

(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
    const clientes = await Cliente.findAll();
    console.log("Lista de clientes \n", clientes);

    const fornecedores = await Fornecedor.findAll();
    console.log("Lista de fornecedores \n", fornecedores);
  } catch (error) {
    console.log(error);
  }
})();
