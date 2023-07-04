const axios = require("axios");
module.exports = class Services{


  
//VERIFICAR USUÁRIO
 static async UsuarioLogin(req,res){
 let valores = req.body;
 const options = {
 url: 'https://f2m4-s4-back.aylmerbolzan.repl.co/login',
 method: 'POST',
 data: valores
 };
 axios(options).then((usuario) => {
 if(usuario != undefined){
 return res.render('logado');
 }
 })
 }


  
// ------ Produto ------

  //Create produto
 static async ProdutoCreate(req,res){
 let valores = req.body;
 const options = {
 url: 'https://f2m4-s4-back.aylmerbolzan.repl.co/add_produtos',
 method: 'POST',
 data: valores
 };
 axios(options);
 const mensagem = "Cadastro realizado com sucesso!";
 res.render("mensagem",{mensagem});
 }

 //LISTAR
 static async ProdutoListar(req,res){
 const options = {
 url: 'https://f2m4-s4-back.aylmerbolzan.repl.co/produtos',
 method: 'GET',
 data: {}
 };
 axios(options).then(response => {
 console.log(response.data);
 const produto =response.data
 res.render("produtos/listar",{produto});
   });
 }

}