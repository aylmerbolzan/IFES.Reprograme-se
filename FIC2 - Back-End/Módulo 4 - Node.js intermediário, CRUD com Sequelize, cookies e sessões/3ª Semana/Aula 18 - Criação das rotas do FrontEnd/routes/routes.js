const express = require("express");
const Services = require("../services/services");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Seja bem Vindo ao nosso sistema de Tarefas.");
});

router.get("/tarefas/Cadastrar", (req, res) => {
  res.render("tarefas/Cadastrar");
});

//ROTA PARA SERVIÇO DE CREATE
router.post("/tarefas/Create", Services.TarefaCreate);

module.exports = router;
