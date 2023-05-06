const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("Conectado ao banco de dados Empresa com sucesso.");

  // Criação das tabelas

//   db.run(
//     "CREATE TABLE setor(id_setor int, nome varchar(40), ramal varchar(4), e_mail varchar(30))"
//   );

//   db.run(
//     "CREATE TABLE funcionario(matricula int primary key, id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15))"
//   );
});

// Inserção de setores na tabela "setor"

// db.run(
//   "INSERT into setor(id_setor, nome, ramal, e_mail) values(1, 'Financeiro', '4254', 'financeiro@empresa.com')"
// );

// db.run(
//   "INSERT into setor(id_setor, nome, ramal, e_mail) values(2, 'Portaria', '4253', 'portaria@empresa.com')"
// );

// db.run(
//   "INSERT into setor(id_setor, nome, ramal, e_mail) values(3, 'Secretaria', '4237', 'secretaria@empresa.com')"
// );

// Inserção de funcionários na tabela "funcionario"

// db.run(
//   "INSERT into funcionario (matricula, id_setor, nome, nascimento, telefone) values(1234, 1, 'Ana', '12-04-1978', '01219219')"
// );

// db.run(
//   "INSERT into funcionario (matricula, id_setor, nome, nascimento, telefone) values(1235, 3, 'Ivo', '12-12-2000', '07280921')"
// );

// db.run(
//   "INSERT into funcionario (matricula, id_setor, nome, nascimento, telefone) values(1236, 2, 'Oto', '07-02-1987', '06924324')"
// );

// db.run(
//   "INSERT into funcionario (matricula, id_setor, nome, nascimento, telefone) values(1237, 1, 'Carina', '09-09-1990', '02932176')"
// );

// Listar todos os funcionários do banco de dados

db.each("SELECT matricula, nome FROM funcionario", (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
});
