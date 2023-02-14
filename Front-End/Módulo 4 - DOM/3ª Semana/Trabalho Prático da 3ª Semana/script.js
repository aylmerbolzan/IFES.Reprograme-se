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

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_clientes")) ?? [];
}

function setLocalStorage(bd_clientes) {
  localStorage.setItem("bd_clientes", JSON.stringify(bd_clientes));
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
  const bd_clientes = getLocalStorage();
  let index = 0;
  for (cliente of bd_clientes) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${cliente.nome}</td>
        <td>${cliente.peso}</td>
        <td>${cliente.custo}</td>
        <td>${cliente.venda}</td>
        <td>${cliente.estado}</td>
        <td>${cliente.email}</td>
        <td>${cliente.celular}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  // Adaptação da função inserir (10 pontos)
  const cliente = {
    nome: document.getElementById("nome").value,
    peso: document.getElementById("peso").value + "g",
    custo: "R$" + document.getElementById("custo").value + ",00",
    venda: "R$" + document.getElementById("venda").value + ",00",
    estado: document.getElementById("estado").value,
    email: document.getElementById("email").value,
    celular: document.getElementById("celular").value,
  };
  const bd_clientes = getLocalStorage();
  bd_clientes.push(cliente);
  setLocalStorage(bd_clientes);
  atualizarTabela();
}

function excluir(index) {
  // Adaptação da função excluir (5 pontos)
  const bd_clientes = getLocalStorage();
  bd_clientes.splice(index, 1);
  setLocalStorage(bd_clientes);
  atualizarTabela();
}

function validarCelular() {
  // Adaptação da função validar (10 pontos)
  const bd_clientes = getLocalStorage();
  for (cliente of bd_clientes) {
    if (nome.value == cliente.nome) {
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
const nome = document.getElementById("celular");
const feedbackNome = document.getElementById("feedbackCelular");
nome.addEventListener("input", validarCelular);

function validarNumero(input) {
  const regex = /^[0-9]*$/;
  if (!regex.test(input.value)) {
    input.value = input.value.replace(/[^0-9]/g, "");
  }
}

//  Validação para 

const valorVenda = document.getElementById("venda");
const valorCusto = document.getElementById("custo");
const vendaFeedback = document.getElementById("vendaFeedback");

valorVenda.addEventListener("input", validarLucro);

function validarLucro() {
  const venda = parseFloat(valorVenda.value);
  const custo = parseFloat(valorCusto.value);
  if (venda < custo) {
    valorVenda.setCustomValidity("O custo não pode ser maior que o valor de venda");
    vendaFeedback.innerText = "O custo não pode ser maior que o valor de venda";
    return false;
  } else {
    valorVenda.setCustomValidity("");
    vendaFeedback.innerText = "Preencha o valor de venda corretamente";
  }

  return true;
}