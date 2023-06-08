var express = require("express");
var router = express.Router();

// Lista de estados

var estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

router.get("/", function (req, res) {
  res.render("form");
});

router.post("/estados/", (req, res) => {
  let nome = req.body.nome;
  estados[estados.length] = nome;
  return res.json([estados[estados.length - 1]]);
});

module.exports = router;
