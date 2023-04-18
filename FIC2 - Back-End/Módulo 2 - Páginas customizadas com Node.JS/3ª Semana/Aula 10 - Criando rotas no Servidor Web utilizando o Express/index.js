const express = require("express");
const rotas = require("./rotas");
const porta = 443;
const app = express();

app.use("/", rotas);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
