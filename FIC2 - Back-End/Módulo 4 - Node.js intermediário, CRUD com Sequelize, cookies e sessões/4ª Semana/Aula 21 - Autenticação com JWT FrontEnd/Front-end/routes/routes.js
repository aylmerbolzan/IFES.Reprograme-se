const express = require("express");
const Services = require("../services/services");
const router = express.Router();
router.get("/",(req, res) =>{
 res.send("Seja bem Vindo ao nosso sistema de Varejo Virtual.");
});
router.post("/login",Services.UsuarioLogin);
router.get("/login",(req, res) =>{
 res.render("usuarios/login");
})

router.get("/usuarios/Cadastrar",(req, res) =>{
 res.render("usuarios/Cadastrar");
})
router.post("/usuarios/Cadastrar",Services.UsuarioCreate);

module.exports=router;
