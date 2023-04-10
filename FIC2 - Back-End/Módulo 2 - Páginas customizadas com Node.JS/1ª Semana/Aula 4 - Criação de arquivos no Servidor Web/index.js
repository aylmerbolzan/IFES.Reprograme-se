const http = require("http");
const fs = require("fs");
const porta = 443;

const servidor = http.createServer((req, res) => {


//   fs.readFile("index.html", (err, arquivo) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(arquivo);
//     res.end();
//   });
// });


fs.appendFile('texto.txt', 'Frase bacana', (err) => {
  if(err) throw err
  console.log('Arquivo criado')
  res.end()
})
})

servidor.listen(porta, () => {
  console.log("Servidor rodando");


});
