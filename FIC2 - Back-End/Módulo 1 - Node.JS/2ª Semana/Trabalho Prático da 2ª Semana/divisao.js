module.exports = function () {
  const prompt = require("prompt-sync")();

  var num1 = parseFloat(prompt("Digite o primeiro número: "));
  var num2 = parseFloat(prompt("Digite o segundo número: "));

  try {
    if (num2 == 0) {
      throw new Error("Não é possível dividir por 0.");
    }
    var divisao = num1 / num2;
    console.log("O resultado de sua divisão é: " + divisao);
  } catch (error) {
    console.log(error.message);
  }
};
