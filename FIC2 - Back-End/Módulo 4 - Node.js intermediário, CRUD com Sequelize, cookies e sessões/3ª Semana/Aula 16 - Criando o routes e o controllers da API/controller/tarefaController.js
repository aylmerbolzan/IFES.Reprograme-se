const Tarefa = require("../model/tarefaModel");
module.exports = class tarefaController {
  //CREATE
  static async TarefaCreate(req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    const tarefa = {
      titulo: titulo,
      descricao: descricao,
    };
    await Tarefa.create(tarefa);
    res.json({ message: "Tarefa cadastrada com sucesso!" });
  }
  //READ - LISTAR
  static async TarefaListar(req, res) {
    const tarefa = await Tarefa.findAll();
    res.json(tarefa);
  }
  //UPDATE
  static async TarefaUpdate(req, res) {
    const id_tarefa = req.params.id;
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    const tarefa = {
      titulo: titulo,
      descricao: descricao,
    };
    await Tarefa.update(tarefa, { where: { id_tarefa: id_tarefa } });
    res.json({
      message:
        "Tarefa atualizada com sucesso! Foram atualizados as sequintes informações: ",
      dados: tarefa,
    });
  }
  static async TarefaDelete(req, res) {
    const id_tarefa = req.params.id;
    await Tarefa.destroy({ where: { id_tarefa: id_tarefa } });
    res.json({ message: "Tarefa excluída com sucesso!" });
  }
};
