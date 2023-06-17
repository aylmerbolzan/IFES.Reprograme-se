const express = require("express");
const app = express();

var cookie = require("cookie-parser");
app.use(cookie());

let usuario1 = {
  nome: "Pedro",
  apelido: "Pedrão",
  idade: 26,
  cidade: "Betsaida",
};

let usuario2 = {
  nome: "Tiago",
  apelido: "Tiaguim",
  idade: 24,
  cidade: "Betsaida",
};

let usuario3 = {
  nome: "João",
  apelido: "Juju",
  idade: 22,
  cidade: "Betsaida",
};

app.get("/", (req, res) => {
  res.send("Seja bem vindo ao meu app!");
});

app.get("/adicionarCookie", (req, res) => {
  res.cookie("user1", usuario1, { expire: 400000 + Date.now() });
  res.cookie("user2", usuario2, { expire: 40000 + Date.now() });
  res.cookie("user3", usuario3, { expire: 400 + Date.now() });
  res.send("Dados do usuário adicionados com sucesso!");
});

app.get("/mostrarCookies", (req, res) => {
  res.send(req.cookies);
});

app.get("/logout", (req, res) => {
  res.clearCookie("user1");
  res.clearCookie("user2");
  res.clearCookie("user3");
  res.send("Dados excluídos com sucesso!");
});

app.listen(3000);
