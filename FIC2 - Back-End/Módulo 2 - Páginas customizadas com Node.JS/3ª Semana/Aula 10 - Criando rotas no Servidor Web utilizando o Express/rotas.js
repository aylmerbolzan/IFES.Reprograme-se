const express = require("express");
const rotas = express.Router();

let municipios = [
  { 'cidade': "vitória", 'info': "Vitória: a capital do Espírito Santo" },
  { 'cidade': "vilavelha", 'info': "Vila Velha: canela verde" },
  { 'cidade': "cachoeiro", 'info': "Cachoeiro de Itapemerim: princesa do Sul" },
  { 'cidade': "colatina", 'info': "Cachoeiro de Itapemerim: princesa do Norte" },
];

rotas.get("/", (req, res) => {
  res.json("Seja bem-vindo!");
});

rotas.get("/:cidadeid", (req, res) => {
  const cidade = req.params.cidadeid;
  const cidadeinfo = municipios.find(i => i.cidade == cidade);
  if (!cidadeinfo) {
    res.status(404).json({ erro: "Cidade não encontrada", cidadepesquisada: cidade });
  } else {
    res.status(200).json(cidadeinfo);
  }
});

module.exports = rotas;
