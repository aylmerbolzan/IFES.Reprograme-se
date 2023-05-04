const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("escola.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("Conectado ao banco de dados Aluno com sucesso.");

  // Criação das tabelas

  /*
  db.run(
    "CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))"
  );
  */
});

// Inserção de alunos na tabela "aluno"

/*
db.run(
  "INSERT into aluno(matricula, nome, email, cidade) values('1234', 'Aylmer Bolzan', 'aylmer.bolzan@gmail.com', 'Domingos Martins')"
);

db.run(
  "INSERT into aluno(matricula, nome, email, cidade) values('2345', 'Mario Henrique', 'mario.henrique@ifes.edu.br', 'Cachoeiro de Itapemirim')"
);

db.run(
  "INSERT into aluno(matricula, nome, email, cidade) values('3456', 'Juliétte Lima', 'juliette.lima@ifes.edu.br', 'Domingos Martins')"
);

*/

// Listar todos os alunos do banco de dados

db.each("SELECT matricula, nome FROM aluno", (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
});
