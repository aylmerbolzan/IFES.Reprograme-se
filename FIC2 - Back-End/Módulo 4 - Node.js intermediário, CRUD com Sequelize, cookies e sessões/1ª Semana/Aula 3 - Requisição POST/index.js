const express = require("express");
const app = express();
const porta = 3000;
var clienteRoute = require("./routes/clienteRoute");

app.use("/", clienteRoute);

app.listen(porta, () => {
  console.log("Servidor rodando na porta 3000");
});
