const axios = require("./api.js");

async function carregarEstados() {
  try {
    var response = await axios.api.get("/estados/ES");
    console.log(response.data);
  } catch (erro) {
    console.log("Ocorreu um erro ao buscar o estado");
  }
}

// function carregarEstados() {
//   axios.api.get("/estados/ES")
//   .then((response) => {
//     console.log(response.data);
//   });
// }

async function alterarEstado() {
  try {
    var response = await axios.api.put("/estados/ES", {
      nome: "Espirito Santo",
    });
  } catch (erro) {
    console.log("Ocorreu um erro");
  }
}

async function incluirEstado() {
  try {
    var response = await axios.api.post("/estados", {
      id: "BA",
      nome: "Bahia",
    });
  } catch (error) {
    console.log("Ocorreu um erro");
  }
}

async function deletarEstado() {
  axios.api
    .delete("/estados/SP")
    .then(() => {
      console.log("Estado deletado com sucesso");
    })
    .catch((erro) => {
      console.log("Ocorreu um erro ao deletar");
    });
}

// alterarEstado();
// carregarEstados();
// incluirEstado();
deletarEstado();
