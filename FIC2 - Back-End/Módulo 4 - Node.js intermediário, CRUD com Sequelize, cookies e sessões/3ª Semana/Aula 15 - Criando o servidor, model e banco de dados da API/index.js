const express = require("express");
const app = express();
const database = require("./db/db");

// Models

const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");

app.get("/", (req, res) => {
  return res.json({ message: "Sistema de Lista de Tarefas" });
});

app.listen(3000);
