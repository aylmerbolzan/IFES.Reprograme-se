const calcularNotas = () => {
  const alunos = [];

  let maiorNota = 0;
  let alunoMaiorNota;
  let menorNota = 100;
  let alunoMenorNota;
  let mediaNotas = 0;
  let qtdAprovados = 0;
  let qtdReprovados = 0;

  // Receber nomes e notas
  for (let i = 1; i <= 10; i++) {
    const nome = prompt(`Nome do Aluno ${i}: `);
    const nota = parseFloat(prompt(`Nota de ` + nome + `: `));
    alunos.push({ nome, nota });
  }

  // Calcular maior nota
  for (const aluno of alunos) {
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
      alunoMaiorNota = aluno.nome;
    }
  }

  // Calcular menor nota
  for (const aluno of alunos) {
    if (aluno.nota < menorNota) {
      menorNota = aluno.nota;
      alunoMenorNota = aluno.nome;
    }
  }

  // Calcular média das notas
  for (const aluno of alunos) {
    mediaNotas += aluno.nota;
  }
  mediaNotas /= alunos.length;
  const mediaNotasFormatado = parseFloat(mediaNotas.toFixed(2));

  // Calcular quantidade de alunos aprovados e reprovados
  for (const aluno of alunos) {
    if (aluno.nota > 60) {
      qtdAprovados++;
    } else {
      qtdReprovados++;
    }
  }

  // Retornar os resultados
  return {
    alunoMaiorNota,
    maiorNota,
    alunoMenorNota,
    menorNota,
    mediaNotasFormatado,
    qtdAprovados,
    qtdReprovados,
  };
};

module.exports = { calcularNotas };