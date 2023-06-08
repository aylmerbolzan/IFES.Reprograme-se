//Bibliotecas/módulos utilizados
const Sequelize = require('sequelize');

//Conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './videoteca.sqlite'
})

//Tratando possíveis erros
try {
    sequelize.authenticate();
    console.log('Conexão realizada com sucesso.');
} catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
}

module.exports = sequelize;