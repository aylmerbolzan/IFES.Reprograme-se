// Validador Bootstrap

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          inserir();
          form.classList.remove("was-validated");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

// Função para ler os dados do localStorage

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_chas")) ?? [];
}

// Função para armazenar os dados no localStorage

function setLocalStorage(bd_chas) {
  localStorage.setItem("bd_chas", JSON.stringify(bd_chas));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() {
  // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_chas = getLocalStorage();
  let index = 0;
  for (blends of bd_chas) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${blends.nome}</td>
        <td>${blends.peso}</td>
        <td>${blends.custo}</td>
        <td>${blends.venda}</td>
        <td>${blends.estado}</td>
        <td>${blends.producao}</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  // Adaptação da função inserir (10 pontos)
  const blends = {
    nome: document.getElementById("nome").value,
    peso: document.getElementById("peso").value + "g",
    custo: "R$" + document.getElementById("custo").value + ",00",
    venda: "R$" + document.getElementById("venda").value + ",00",
    estado: document.getElementById("estado").value,
    producao: document.getElementById("producao").value,
  };

  const bd_chas = getLocalStorage();
  bd_chas.push(blends);
  setLocalStorage(bd_chas);
  atualizarTabela();
}

function excluir(index) {
  // Adaptação da função excluir (5 pontos)
  const bd_chas = getLocalStorage();
  bd_chas.splice(index, 1);
  setLocalStorage(bd_chas);
  atualizarTabela();
}

function validarBlend() {
  // Adaptação da função validar (10 pontos)
  const bd_chas = getLocalStorage();
  for (blends of bd_chas) {
    if (nome.value == blends.nome) {
      nome.setCustomValidity("Este blend já está cadastrado!");
      feedbackNome.innerText = "Este blend já está cadastrado!";
      return false;
    } else {
      nome.setCustomValidity("");
      feedbackNome.innerText = "Informe o nome do blend corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const nome = document.getElementById("nome");
const feedbackNome = document.getElementById("feedbackNome");
nome.addEventListener("input", validarBlend);

// Validador para números inteiros em Custo e Venda

function validarNumero(input) {
  const regex = /^[0-9]*$/;
  if (!regex.test(input.value)) {
    input.value = input.value.replace(/[^0-9]/g, "");
  }
}

//  Validador para checar se o valor de venda foi preenchido maior que o valor de custo

const valorVenda = document.getElementById("venda");
const valorCusto = document.getElementById("custo");
const vendaFeedback = document.getElementById("vendaFeedback");

valorVenda.addEventListener("input", validarLucro);

function validarLucro() {
  const venda = parseFloat(valorVenda.value);
  const custo = parseFloat(valorCusto.value);
  if (venda < custo) {
    valorVenda.setCustomValidity(
      "O custo não pode ser maior que o valor de venda"
    );
    vendaFeedback.innerText = "O custo não pode ser maior que o valor de venda";
    return false;
  } else {
    valorVenda.setCustomValidity("");
    vendaFeedback.innerText = "Preencha o valor de venda corretamente";
  }

  return true;
}

//  Função darkmode

let darkMode = false;

function toggleTheme() {
  const body = document.querySelector("body");
  if (darkMode) {
    body.setAttribute("data-bs-theme", "light");
    darkMode = false;
  } else {
    body.setAttribute("data-bs-theme", "dark");
    darkMode = true;
  }
}
