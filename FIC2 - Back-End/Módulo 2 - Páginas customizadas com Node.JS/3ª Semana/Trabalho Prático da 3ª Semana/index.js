const http = require("http");
const porta = 443;
const formidavel = require("formidable");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
  if (req.url != "/enviodearquivo") {
    const file = fs.readFileSync("index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(file);

    return res.end();
  } else {
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      const urlAntiga = arquivos.fileupload.filepath;
      const urlNova =
        "./enviodearquivo/" + arquivos.fileupload.originalFilename;

      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, function (err) {
        if (err) console.log(err);

        res.write("Arquivo enviado com sucesso!");
        res.end();
      });
    });
  }
});

function listarArquivos(diretorio, arquivos) {

    if (!arquivos)
       arquivos = []
    let listagemArquivos = fs.readdirSync(diretorio)
    console.log(listagemArquivos)
 }
 listarArquivos('./enviodearquivo')

servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
