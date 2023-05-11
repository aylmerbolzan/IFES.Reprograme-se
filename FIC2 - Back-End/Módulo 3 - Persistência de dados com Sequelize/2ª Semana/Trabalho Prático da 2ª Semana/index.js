// Importando as biliotecas
const { Sequelize, Model, DataTypes } = require("sequelize");

//Abrindo conexão com o Banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

//Definindo a classe "setor"
class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        idsetor: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        ramal: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(30),
        },
      },
      { sequelize, modelName: "setor", tableName: "setores" }
    );
  }
}

//Inicialização do modelo create table setor
Setor.init(sequelize);
class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        idsetor: {
          type: DataTypes.INTEGER,
          references: {
            model: Setor,
            key: "idsetor",
          },
        },
        nome: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        nascimento: {
          type: DataTypes.DATE,
        },
        telefone: {
          type: DataTypes.STRING(15),
        },
      },
      { sequelize, modelName: "funcionario", tableName: "funcionarios" }
    );
  }
}

Funcionario.init(sequelize);

// Sincronismo
(async () => {
  await sequelize.sync({ force: true });

  // Criando setores
  const setor_createF = await Setor.create({
    nome: "Financeiro",
    ramal: "2134",
    email: "financeiro@empresa.com",
  });

  const setor_createS = await Setor.create({
    nome: "Secretaria",
    ramal: "2135",
    email: "secretaria@empresa.com",
  });

  const setor_createP = await Setor.create({
    nome: "Portaria",
    ramal: "2136",
    email: "portaria@empresa.com",
  });

  const setor_createC = await Setor.create({
    nome: "Contabilidade",
    ramal: "2137",
    email: "contabilidade@empresa.com",
  });

  const setor_createD = await Setor.create({
    nome: "Diretoria",
    ramal: "2138",
    email: "diretoria@empresa.com",
  });

  const setor_createR = await Setor.create({
    nome: "Recursos Humanos",
    ramal: "2139",
    email: "rh@empresa.com",
  });

  // Deletando setor "Contabilidade"
  const setor_delete = await Setor.findByPk(4);
  setor_delete.destroy();

  const setores_exclusao = await Setor.findAll();
  console.log(
    '\n\n Lista de Setores Atualizada - Exclusão de "Contabilidade": \n',
    JSON.stringify(setores_exclusao, null, 2) + "\n\n"
  );

  // Renomeando "Recursos Humanos" para "Departamento Pessoal"
  const setor_chave = await Setor.findByPk(6);
  setor_chave.nome = "Departamento Pessoal";
  const resultado = await setor_chave.save();
  console.log(resultado);

  // Listando objetos após atualização
  const setores_update = await Setor.findAll();
  console.log(
    '\n\n Lista de Setores Atualizada - "Recursos Humanos" renomeado para "Departamento Pessoal": \n',
    JSON.stringify(setores_update, null, 2) + "\n\n"
  );

  // Listando todos os setores atualizados
  const setores_listar = await Setor.findAll();

  console.log(
    "\n\n Lista de Todos os Setores Atualizados: \n",
    JSON.stringify(setores_listar, null, 2) + "\n\n"
  );
})();
