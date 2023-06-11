const Funcionario = require("../model/funcionarioModel");

module.exports = class funcionarioController {
  //CREATE

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

  // READ - LISTAR

  static async FuncionarioListar(req, res) {
    const funcionario = await Funcionario.findAll({ raw: true });
    res.json(funcionario);
  }

  //UPDATE

  static async FuncionarioUpdate(req, res) {
    const matricula = req.params.id;
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
    await Funcionario.update(funcionario, { where: { matricula: matricula } });
    res.json({ message: "Cadastro atualizado com sucesso!" });
  }

  //DELETE

  static async FuncionarioDelete(req, res) {
    const matricula = req.params.id;
    await Funcionario.destroy({ where: { matricula: matricula } });

    res.json({ message: "Cadastro deletado com sucesso!" });
  }
};
