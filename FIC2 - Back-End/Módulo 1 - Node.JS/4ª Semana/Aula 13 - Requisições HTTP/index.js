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

// alterarEstado();
carregarEstados();