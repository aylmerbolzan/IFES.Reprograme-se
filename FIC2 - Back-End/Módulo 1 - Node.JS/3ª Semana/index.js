const prompt = require("prompt-sync")();
const fs = require("fs");
const logo = ".____________________.\n|                    |\n|   ~ ControlCar ~   |\n| .Gestão de Frotas. |\n|____________________|\n\n";

// Cadastro de veículos
async function incluirCarro() {
  var montadora = prompt("Montadora: ");
  var modelo = prompt("Modelo: ");
  var placa = prompt("Placa: ");
  var ano = prompt("Ano: ");
  var cor = prompt("Cor: ");

  var carro = {
    Montadora: montadora,
    Modelo: modelo,
    Placa: placa,
    Ano: ano,
    Cor: cor,
  };

  try {
    var carros = await obterCarros();
    var lista = JSON.parse(carros).carros;

    await adicionarCarro(lista, carro);
    console.log("\nVeículo cadastrado com sucesso!\n\n");
  } catch (erro) {}
}

// Inserção de veículo no JSON
function adicionarCarro(lista, carro) {
  lista.push(carro);
  var json = JSON.stringify({ carros: lista });

  return new Promise((resolve, reject) => {
    fs.writeFile("./bd.json", json, (erro) => {
      if (erro) {
        reject(erro);
      }
      resolve("\nVeículo cadastrado com sucesso!\n\n");
    });
  });
}

// Leitura do JSON com cadastros
function obterCarros() {
  return new Promise((resolve, reject) => {
    fs.readFile("bd.json", "utf-8", (erro, data) => {
      if (erro) {
        reject(erro);
      }
      resolve(data);
    });
  });
}

// Exibição dos veículos cadastrados
async function listarCarros() {
  const carros = await obterCarros();
  const lerCarros = JSON.parse(carros).carros;
  console.table(lerCarros);
  console.log("\n");
}

// Tela principal do sistema
async function main() {
  var op;
  do {
    console.log("[  MENU PRINCIPAL  ]\n");
    console.log("1 - Cadastrar novo veículo");
    console.log("2 - Listar veículos cadastrados");
    console.log("0 - Sair\n");
    op = prompt("Digite a opção desejada: ");

    switch (op) {
      case "1":
        console.clear();
        console.log(logo);
        console.log("\n[ CADASTRO DE VEÍCULOS ]\n");
        await incluirCarro();
        break;

      case "2":
        console.clear();
        console.log(logo);
        console.log("\n[     RELATÓRIO DE VEÍCULOS CADASTRADOS    ]\n");
        await listarCarros();
        break;

      case "0":
        console.clear();
        console.log(logo);
        console.log("\nObrigado por utilizar ControlCar.");
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