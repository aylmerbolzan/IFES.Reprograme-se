const express = require("express");
const router = express.Router();

////////////MODELS///////////////////
const usuarioController = require("../controller/usuarioController");
const tarefaController = require("../controller/tarefaController");
////////////////Requisições HTTP Principal /////////////////////
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Lista de Tarefas" });
})
////////////////Requisições HTTP Usuario /////////////////////
//POST - CADASTRAR
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);
//GET - LISTAR
router.get("/usuarios/:id?", usuarioController.UsuarioListar);
//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);
// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);
////////////////Requisições HTTP Tarefa /////////////////////
//POST - CADASTRAR
router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);
//GET - LISTAR
router.get("/tarefas/:id?", tarefaController.TarefaListar);
//PUT - UPDATE
router.put("/tarefas/:id", tarefaController.TarefaUpdate);
// DELETE
router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;