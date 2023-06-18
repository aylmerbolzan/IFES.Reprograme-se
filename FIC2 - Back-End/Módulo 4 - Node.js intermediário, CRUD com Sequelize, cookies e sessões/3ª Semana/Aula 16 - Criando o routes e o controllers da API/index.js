const express = require("express");
const app = express();
const database = require("./db/db");
const routes = require("./routes/routes");

// Models

const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");

// Codificação JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", routes);

app.listen(3000);
