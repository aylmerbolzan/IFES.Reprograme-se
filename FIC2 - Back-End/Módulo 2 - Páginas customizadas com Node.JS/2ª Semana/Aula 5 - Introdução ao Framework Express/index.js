const express = require("express");
const app = express();
const porta = 443;

app.get("/", function (req, res) {
  res.send("Olá mundo! Estou usando o Express");
});

app.listen(porta, function () {
  console.log("Servidor rodando na porta " + porta);
});
