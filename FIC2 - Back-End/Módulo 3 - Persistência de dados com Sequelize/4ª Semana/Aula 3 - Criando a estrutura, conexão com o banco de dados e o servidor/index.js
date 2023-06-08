//Bibliotecas/módulos utilizados
const database = require('./db/db');
const express = require('express');
const app = express();
const Video = require('./models/Video');

//Sincronismo do banco de dados
try {
    database.sync().then(()=>{
app.listen(9443, ()=>{
    console.log('Servidor rodando na porta 9443');
})
    });

} catch (error){
    console.log('Não foi possível sincronizar o banco de dados:', error);
}