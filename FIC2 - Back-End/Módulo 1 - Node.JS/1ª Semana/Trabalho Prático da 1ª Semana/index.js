const { calcularNotas } = require('./calculo-notas.js');

const resultado = calcularNotas();


console.log("\n• " + resultado.alunoMaiorNota + " tirou a maior nota: " + resultado.maiorNota);
console.log("• " + resultado.alunoMenorNota + " tirou a menor nota: " + resultado.menorNota);
console.log("• A média de todas as notas é: " + resultado.mediaNotasFormatado);
console.log("• " + resultado.qtdAprovados + " alunos foram aprovados");
console.log("• " + resultado.qtdReprovados + " alunos foram reprovados");