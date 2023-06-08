var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Seja bem vindo ao nosso site!");
});

router.get("/clientes", function (req, res) {
  res.send("Lista de Clientes");
});

module.exports = router;
