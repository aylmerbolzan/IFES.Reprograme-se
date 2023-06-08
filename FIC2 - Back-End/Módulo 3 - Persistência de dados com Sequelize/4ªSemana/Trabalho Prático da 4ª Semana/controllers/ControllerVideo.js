const Video = require("../models/Video");

module.exports = class VideoController {
  static cadastrarVideo(req, res) {
    res.render("videos/Cadastrar");
  }

  //CREATE
  static async VideoCreate(req, res) {
    const video = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_sinopse: req.body.link_sinopse,
    };

    await Video.create(video);
    res.redirect("/");
  }

  //READ
  static async listarVideos(req, res) {
    const video = await Video.findAll({ raw: true });
    res.render("videos/listar", { video });
  }

  //UPDATE
  static async UpdateVideo(req, res) {
    const id_filme_tipo = req.params.id_filme_tipo;
    const video = await Video.findOne({
      where: { id_filme_tipo: id_filme_tipo },
      raw: true,
    });
    res.render("videos/update", { video });
  }
  static async VideoUpdate(req, res) {
    const id_filme_tipo = req.body.id_filme_tipo;

    const video = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_sinopse: req.body.link_sinopse,
    };
    await Video.update(video, { where: { id_filme_tipo: id_filme_tipo } });

    res.redirect("/");
  }

  //DELETE
  static async RemoverVideo(req, res) {
    const id_filme_tipo = req.body.id_filme_tipo;
    await Video.destroy({ where: { id_filme_tipo: id_filme_tipo } });
    res.redirect("/");
  }
};
