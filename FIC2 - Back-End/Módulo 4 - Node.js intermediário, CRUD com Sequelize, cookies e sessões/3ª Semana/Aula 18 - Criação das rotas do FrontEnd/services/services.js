const axios = require("axios");
const apiLink = "http://localhost:3000";

module.exports = class Services {
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: `${apiLink}/tarefas/Cadastrar`,
      method: "POST",
      data: valores,
    };

    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
