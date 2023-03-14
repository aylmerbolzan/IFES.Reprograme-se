module.exports = function () {
  const prompt = require("prompt-sync")();

  var placa = prompt("Digite a placa de seu veículo: ");
  var ultimoDigito = placa[placa.length - 1];

  var hoje = new Date();
  var diaDaSemana = hoje.getDay();

  let semana = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0],
    6: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  for (let dia in semana) {
    if (dia == diaDaSemana) {
      if (semana[dia].includes(parseInt(placa[placa.length - 1]))) {
        console.log("Hoje você pode circular com seu veículo.");
      } else {
        console.log("Hoje você não pode circular com seu veículo.");
      }
    }
  }
};
