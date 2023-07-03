////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();
//////CONTROLLERS
const usuarioController = require("../controller/usuarioController");
////////////////Requisições HTTP Principal /////////////////////
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Varejo" });
});

////////////////Requisições HTTP Usuario /////////////////////
//POST - CADASTRAR
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);
//GET - LISTAR
router.get("/usuarios/:id?", usuarioController.verificaJWT, usuarioController.UsuarioListar);
//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);
// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

router.post("/login", usuarioController.UsuarioVerificaLogin);


module.exports = router;
