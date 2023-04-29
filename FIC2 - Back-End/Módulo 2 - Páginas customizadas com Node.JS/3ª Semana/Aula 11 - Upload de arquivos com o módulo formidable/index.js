const http = require("http");
const porta = 443;
const formidavel = require("formidable");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
 if (req.url !=enviodearquivo){
    res.writeHead(200, { "Content-Type": "text/html" });
res.write(
  '<form action="enviodearquivo" method="post" enctype="multipart/form-data">'
);
res.write('<input type="file" name="fileupload"><br>');
res.write('<input type="submit" value="Enviar">');
res.write("</form>");
return res.end();

 } else {
    const form = new formidable.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {

      const urlAntiga = arquivos.filetoupload.filepath;
      const urlNova = "./enviodearquivo" + arquivos.filetoupload.originalFilename;


    var rawData = fs.readFileSync(urlAntiga);
    
      });
    });
  }
 }



});

servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});



