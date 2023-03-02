var nome = prompt("Digite o seu nome:");
var salarioBruto = parseFloat(prompt(nome + ", digite o seu salário bruto:"));
var dependentes = parseInt(prompt(nome + ", digite o número de dependentes:"));
var ir = salarioBruto * 0.1;
var salarioLiquido = salarioBruto - ir;
var rendaPerCapita = parseFloat(salarioBruto / (dependentes + 1));

if (rendaPerCapita <= 500) {
  ir = 0;
  document.write(
    nome +
      ", sua renda per capita é R$" + rendaPerCapita.toFixed(2).replace(".", ",") + ", que é inferior a R$500,00. <br> Sendo assim, não haverão deduções, ficando seu salário liquido em R$" +
      salarioBruto.toFixed(2).replace(".", ",")
  );
} else {
  if (salarioBruto > 0 && salarioBruto <= 1903.98) {
    ir = salarioBruto * 0.05;
    document.write(
      nome +
        ", seu salário bruto é inferior a R$1,903,98 e sua renda per capita é R$" + rendaPerCapita.toFixed(2).replace(".", ",") + ". <br> Sendo assim, seu imposto de renda foi calculado em 5%, ficando seu salário liquido em R$" +
        salarioLiquido.toFixed(2).replace(".", ",")
    );
  } else if (salarioBruto <= 2826.65) {
    ir = salarioBruto * 0.075;
    document.write(
      nome +
        ", seu salário bruto está entre R$1,903,98 e R$2,826,65 e sua renda per capita é R$" + rendaPerCapita.toFixed(2).replace(".", ",") + ". <br> Sendo assim, seu imposto de renda foi calculado em 7,5%, ficando seu salário liquido em R$" +
        salarioLiquido.toFixed(2).replace(".", ",")
    );
  } else {
    ir = salarioBruto * 0.15;
    document.write(
      nome +
        ", seu salário bruto é superior a R$2,826,65 e sua renda per capita é R$" + rendaPerCapita.toFixed(2).replace(".", ",") + ". <br> Sendo assim, seu imposto de renda foi calculado em 15%, ficando seu salário liquido em R$" +
        salarioLiquido.toFixed(2).replace(".", ",")
    );
  }
}