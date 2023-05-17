/// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;

const bodyParser = require('body-parser');
const database = require('./db');
const Cliente = require('./models/cliente')

// Setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// Definindo rotas
app.get('/', (req, res) =>{
 res.send('Bem vindo ao cadastro de clientes.');
});

app.get("/cadcliente", function (req, res){
  res.render('formCliente');
});

app.post("/addcliente", function (req, res){
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone,
  }).then(function(){
    res.send("Cliente cadastrado com sucesso");
  })
})

app.listen(porta, () => { console.log('Servidor rodando') });


(async() => {
  try{
    const resultado = await database.sync();
    console.log(resultado);
    const clientes = await Cliente.findAll();
    console.log("Lista de clientes \n", clientes);
  } catch(error){
    console.log(error)
  }
})();