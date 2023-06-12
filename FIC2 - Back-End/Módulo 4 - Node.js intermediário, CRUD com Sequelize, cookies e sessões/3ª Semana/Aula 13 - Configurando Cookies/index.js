const express = require("express");
const app = express();

var cookie = require("cookie-parser");
app.use(cookie());
let usuario = {
  nome: "João",
  idade: 18,
};

app.get("/adicionar/Usuario", (req, res) => {
  res.cookie("usuarioDados", usuario);
  res.send("Dados do usuário adicionados com sucesso!");
});

app.get("/usuario", (req, res) => {
  res.send(req.cookies);
});

app.get("/", (req, res) => {
  res.send("Seja bem vindo ao meu app!");
});

app.listen(3000);
