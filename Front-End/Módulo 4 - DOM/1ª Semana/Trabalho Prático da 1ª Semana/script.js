// Selecionar todos elementos da classe 'produto_preco'

let precos = document.getElementsByClassName("produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)

let soma = 0;
for (var i = 0; i < precos.length; i++) {
  soma += parseFloat(precos[i].innerText);
}

// Escrever no conteúdo da página o valor da soma

document.write("Total: R$ " + soma);