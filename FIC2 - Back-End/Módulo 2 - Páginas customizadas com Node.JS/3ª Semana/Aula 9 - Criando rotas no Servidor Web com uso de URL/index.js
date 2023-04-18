const http = require("http");
const porta = 443;
const url = require("url");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);

  const parametro = url.parse(req.url, true).query;
  res.write("<br>" + parametro.nome + " " + parametro.sobrenome);
  res.write("<br>" + parametro.cidade);
  res.end();
});

servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});
