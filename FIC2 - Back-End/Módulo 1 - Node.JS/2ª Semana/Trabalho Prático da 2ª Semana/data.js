module.exports = function () {
  const prompt = require("prompt-sync")();

  let data = prompt("Digite uma data (DD/MM/AAAA): ");
  let arrayData = data.split("/");

  let mes = arrayData[1];

  const meses = {
    "01": " de Janeiro de ",
    "02": " de Fevereiro de ",
    "03": " de Março de ",
    "04": " de Abril de ",
    "05": " de Maio de ",
    "06": " de Junho de ",
    "07": " de Julho de ",
    "08": " de Agosto de ",
    "09": " de Setembro de ",
    "10": " de Outubro de ",
    "11": " de Novembro de ",
    "12": " de Dezembro de "
  };

  for (mes in meses) {
    if (arrayData[1] == mes) {
      console.log(arrayData[0] + meses[mes] + arrayData[2]);
    }
  }
};
