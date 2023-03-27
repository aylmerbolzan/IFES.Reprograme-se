//Iniciar JSON server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(3000, () => {});

const axios = require("./api.js");
const fs = require("fs");
const prompt = require("prompt-sync")();
const logo =
  ".____________________.\n|                    |\n|   ~ TaskMaster ~   |\n|  .To Do List App.  |\n|____________________|\n\n";

//1 - Cadastrar nova tarefa;
async function cadastrarTarefa() {
  var id = prompt("ID: ");
  var descricao = prompt("Descrição: ");
  try {
    var response = await axios.api.post("/tarefas", {
      id: id,
      descricao: descricao,
      status: "Pendente",
    });
    console.log(
      "\nTarefa " + id + ", " + '"' + descricao + '", incluída com sucesso\n'
    );
  } catch (error) {
    console.log("\nOcorreu um erro ao incluir nova tarefa\n");
  }
}

//2 - Alterar uma tarefa;
async function alterarTarefa() {
  var id = prompt("ID: ");
  var descricao = prompt("Nova descrição: ");
  try {
    var response = await axios.api.get("/tarefas/" + id);
    var tarefa = response.data;
    var id = tarefa.id;
    var status = tarefa.status;
    var response = await axios.api.put("/tarefas/" + id, {
      id: id,
      descricao: descricao,
      status: status,
    });
    console.log(
      "\nDescrição da tarefa " +
        id +
        " alterada com sucesso para " +
        '"' +
        descricao +
        '"\n'
    );
  } catch (erro) {
    console.log("\nOcorreu um erro ao alterar a tarefa\n");
  }
}

// 3 - Marcar tarefa como "Concluída";
async function concluirTarefa() {
  var id = prompt("ID: ");
  try {
    var response = await axios.api.get("/tarefas/" + id);
    var tarefa = response.data;
    var id = tarefa.id;
    var descricao = tarefa.descricao;
    var response = await axios.api.put("/tarefas/" + id, {
      id: id,
      descricao: descricao,
      status: "Concluído",
    });
    console.log(
      "\nO status da tarefa " + id + ' foi alterado para "Concluído"\n'
    );
  } catch (erro) {
    console.log("\nOcorreu um erro ao alterar a tarefa\n");
  }
}

// 4 - Excluir uma tarefa;
async function deletarTarefa() {
  var id = prompt("ID: ");
  try {
    var response = await axios.api.delete("/tarefas/" + id);
    console.log("\nA tarefa " + id + " foi excluída com sucesso\n");
  } catch (erro) {
    console.log("\nOcorreu um erro ao deletar a tarefa\n");
  }
}

// Leitura do JSON com tarefass
function listarTarefas() {
  return new Promise((resolve, reject) => {
    fs.readFile("db.json", "utf-8", (erro, data) => {
      if (erro) {
        reject(erro);
      }
      resolve(data);
    });
  });
}

// 5 - Listar tarefas pendentes;
async function listarTarefasPendentes() {
  const tarefas = await listarTarefas();
  const lerTarefas = JSON.parse(tarefas).tarefas;
  const tarefasPendentes = lerTarefas.filter(
    (tarefa) => tarefa.status === "Pendente"
  );
  console.table(tarefasPendentes);
  console.log("\n");
}

// 6 - Listar tarefas concluídas;
async function listarTarefasConcluidas() {
  const tarefas = await listarTarefas();
  const lerTarefas = JSON.parse(tarefas).tarefas;
  const tarefasConcluidas = lerTarefas.filter(
    (tarefa) => tarefa.status === "Concluído"
  );
  console.table(tarefasConcluidas);
  console.log("\n");
}

// 7 - Listar tarefas concluídas;
async function listarTodasTarefas() {
  const tarefas = await listarTarefas();
  const lerTarefas = JSON.parse(tarefas).tarefas;
  console.table(lerTarefas);
  console.log("\n");
}

// 8 - Marcar tarefa como "Pendente";
async function retornarTarefa() {
  var id = prompt("ID: ");
  try {
    var response = await axios.api.get("/tarefas/" + id);
    var tarefa = response.data;
    var id = tarefa.id;
    var descricao = tarefa.descricao;
    var response = await axios.api.put("/tarefas/" + id, {
      id: id,
      descricao: descricao,
      status: "Pendente",
    });
    console.log(
      "\nO status da tarefa " + id + ' foi alterado para "Pendente"\n'
    );
  } catch (erro) {
    console.log("\nOcorreu um erro ao alterar a tarefa\n");
  }
}

// Tela principal do sistema
async function main() {
  var op;
  do {
    console.log("[  MENU PRINCIPAL  ]\n");
    console.log("1 - Cadastrar nova tarefa");
    console.log("2 - Alterar uma tarefa");
    console.log('3 - Marcar tarefa como "Concluída"');
    console.log("4 - Excluir uma tarefa");
    console.log("5 - Listar tarefas pendentes");
    console.log("6 - Listar tarefas concluídas");
    console.log("7 - Listar todas as tarefas");
    console.log('8 - Marcar tarefa como "Pendente"');
    console.log("\n0 - Sair\n");
    op = prompt("Digite a opção desejada: ");

    switch (op) {
      case "1":
        console.clear();
        console.log(logo);
        console.log("\n[ CADASTRAR NOVA TAREFA ]\n");
        await cadastrarTarefa();
        break;

      case "2":
        console.clear();
        console.log(logo);
        console.log("\n[ ALTERAR UMA TAREFA ]\n");
        await alterarTarefa();
        break;

      case "3":
        console.clear();
        console.log(logo);
        console.log("\n[ CONCLUIR TAREFA ]\n");
        await concluirTarefa();
        break;

      case "4":
        console.clear();
        console.log(logo);
        console.log("\n[ EXCLUIR TAREFA ]\n");
        await deletarTarefa();
        break;

      case "5":
        console.clear();
        console.log(logo);
        console.log("\n[ TAREFAS PENDENTES ]\n");
        await listarTarefasPendentes();
        break;

      case "6":
        console.clear();
        console.log(logo);
        console.log("\n[ TAREFAS CONCLUÍDAS ]\n");
        await listarTarefasConcluidas();
        break;

      case "7":
        console.clear();
        console.log(logo);
        console.log("\n[ TAREFAS CADASTRADAS ]\n");
        await listarTodasTarefas();
        break;

      case "8":
        console.clear();
        console.log(logo);
        console.log("\n[ RETORNAR TAREFA ]\n");
        await retornarTarefa();
        break;

      case "0":
        console.clear();
        console.log(logo);
        console.log("\nObrigado por utilizar TaskMaster.");
        break;

      default:
        console.clear();
        console.log(logo);
        console.log("⚠ Opção inválida ⚠\n");
        break;
    }
  } while (op !== "0");
}

console.log(logo);
main();
