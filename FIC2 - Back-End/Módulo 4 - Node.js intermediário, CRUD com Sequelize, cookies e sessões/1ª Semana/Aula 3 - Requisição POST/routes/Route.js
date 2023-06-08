var express = require("express");
var router = express.Router();

// Lista de cidades

var cidades = [
  "Mimoso",
  "Cachoeiro",
  "Serra",
  "Vila Velha",
  "Vitória",
  "Cariacica",
  "Viana",
];

router.get("/", function (req, res) {
  res.send("Seja bem vindo ao nosso site!");
});

router.get("/clientes", function (req, res) {
  res.send("Lista de Clientes");
});

router.get("/clientes/:nome/:sobrenome?", function (req, res) {
  res.send("Seja bem vindo, " + req.params.nome + " " + req.params.sobrenome);
});

router.get("/cidades/:id", (req, res) => {
  let id = req.params.id;
  return res.json([cidades[id]]);
});

router.post("/cidades/", (req, res) => {
  let nome = req.body.nome;
  cidades[(cidades.length)] = nome;
  return res.json([cidades[cidades.length - 1]]);
});

router.get("/cidades", (req, res) => {
  res.render("form");
});

module.exports = router;
