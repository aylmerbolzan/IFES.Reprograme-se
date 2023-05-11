// Importando as biliotecas
const { Sequelize, Model, DataTypes } = require("sequelize");

//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
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

  // CREATE - Criar objetos

  const setor_create = await Setor.create({
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

  // READ - Listar objetos

  const setores_listar = await Setor.findAll();

  console.log(
    "Lista de setores: \n",
    JSON.stringify(setores_listar, null, 2) + "\n\n"
  );

  // UPDATE - Atualizar/editar objetos

  const setor_chave = await Setor.findByPk(3);
  setor_chave.nome = "Estoque";
  const resultado = await setor_chave.save();
  console.log(resultado);

  // Listando objetos após atualização
  const setores_update = await Setor.findAll();
  console.log(
    "Lista de Setores Atualizada: \n",
    JSON.stringify(setores_update, null, 2) + "\n\n"
  );

  // DELETE - Deletar objetos

  const setor_delete = await Setor.findByPk(1);
  setor_delete.destroy();

  const setores_exclusao = await Setor.findAll();
  console.log(
    "Lista de Setores Atualizada: \n",
    JSON.stringify(setores_exclusao, null, 2) + "\n\n"
  );

  // CREATE[funcionario] - Criar objetos

  const funcionario_create = await Funcionario.create({
    idsetor: 2,
    nome: "Ana",
    nascimento: "1978-04-12",
    telefone: "01219219",
  });

  const funcionario_create1 = await Funcionario.create({
    idsetor: 3,
    nome: "Ivo",
    nascimento: "2020-12-01",
    telefone: "07280921",
  });

  const funcionario_create2 = await Funcionario.create({
    idsetor: 2,
    nome: "Oto",
    nascimento: "1987-02-07",
    telefone: "06924324",
  });

  const funcionario_create3 = await Funcionario.create({
    idsetor: 3,
    nome: "Carina",
    nascimento: "1990-09-09",
    telefone: "02932176",
  });

  const funcionarios_listar = await Funcionario.findAll();
  
  console.log(
    "Lista de Setores Atualizada: \n",
    JSON.stringify(funcionarios_listar, null, 2),
    "\n\n");
})();