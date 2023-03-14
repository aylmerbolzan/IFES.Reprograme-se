const rodizio = require("./rodizio.js");
const data = require("./data.js");
const divisao = require("./divisao.js");

rodizio();
console.log("\n");

data();
console.log("\n");

divisao();
console.log("\n");

const fs = require("fs");

fs.readFile("./cadastros.json", "utf-8", (err, data) => {
  const json = JSON.parse(data);
  console.log(json);
});
