const Funcionario = require("../model/funcionarioModel");

module.exports = class funcionarioController {
  static async FuncionarioCreate(req, res) {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let nascimento = req.body.nascimento;
    const funcionario = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email,
      nascimento: nascimento,
    };
    await Funcionario.create(funcionario);
    res.json({ message: "Cadastro realizado com sucesso!" });
  }

  static async FuncionarioListar(req, res) {
    const funcionario = await Funcionario.findAll({ raw: true });
    res.json(funcionario);
  }
};
