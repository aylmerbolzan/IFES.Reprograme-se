const http = require("http");
const readline = require("readline");
const fs = require("fs");
const porta = 443;

const servidor = http.createServer((req, res) => {
  fs.readFile("index.html", (err, arquivo) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(arquivo);
    res.end();
  });

  fs.appendFile(
    "texto.txt",
    "Não se preocupe com erros, eles são apenas oportunidades para melhorar o seu código.\n\n",
    (err) => {
      if (err) throw err;
      console.log("Arquivo criado");
      res.end();
    }
  );

  async function readFileByLine(file) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      console.log(line);
    }
  }
});

servidor.listen(porta, () => {
  console.log("Servidor rodando");
});
