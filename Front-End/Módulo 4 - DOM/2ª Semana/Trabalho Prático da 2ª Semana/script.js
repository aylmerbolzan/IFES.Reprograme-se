var cachorros = [
  { nome: "Thor", imagem: "dog1" },
  { nome: "Zeca", imagem: "dog2" },
  { nome: "Zeus", imagem: "dog3" },
  { nome: "Pingo", imagem: "dog4" },
];

var gatos = [
  { nome: "Dunga", imagem: "cat1" },
  { nome: "Mika", imagem: "cat2" },
  { nome: "Conan", imagem: "cat3" },
  { nome: "Messi", imagem: "cat4" },
];

// Selecionar elemento 'select_animais'

let selectAnimais = document.getElementById("select_animais");

// Selecionar elemento 'container'

let container = document.getElementById("container");

// Selecionar elemento 'nome'

let nome = document.getElementById("nome");

// Adicionar Listener 'input' ao elemento 'select_animais'

selectAnimais.addEventListener("input".listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container'

container.addEventListener("mouseover".mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container'

container.addEventListener("mouseout".limparNome);

function listarAnimais() {
  limparDivContainer();

  // Implementar...
  // Criar elementos do tipo <img src=./img/....
  // Fazer com que os elementos img sejam filhos do elemento 'container'
  if (selectAnimais.value == "dog") {
    for (var i = 0; i < cachorros.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", "./img/$[imagem]".jpg");
      img.setAttribute("alt", cachorros[i].nome);
      container.appendChild(img);
    }
  } else {
    for (var i = 0; i < gatos.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", "./img/cat" + (i + 1) + ".jpg");
      img.setAttribute("alt", gatos[i].nome);
      container.appendChild(img);
    }
  }
}

function mostrarNome(e) {
  // Implementação da função (4 pontos)
  // Implementar...

  nome.innerText = e.target.alt;
}

function limparNome() {
  p.innerText = "";
}

function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
