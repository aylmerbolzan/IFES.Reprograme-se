var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Seja bem vindo ao nosso site!");
});

router.get("/clientes", function (req, res) {
  res.send("Lista de Clientes");
});

router.get("/clientes/:nome/:sobrenome?", function (req, res) {
  res.send("Seja bem vindo, " + req.params.nome + " " + req.params.sobrenome);
});

module.exports = router;
