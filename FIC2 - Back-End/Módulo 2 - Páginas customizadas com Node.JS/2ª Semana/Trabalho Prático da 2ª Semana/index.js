const express = require("express");
const app = express();
const porta = 443;

app.get("/P1", function (req, res) {
  res.send("P1");
});

app.get("/P2", function (req, res) {
  res.send("P2");
}); 

app.get("/P3", function (req, res) {
  res.send("P3");
}); 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
