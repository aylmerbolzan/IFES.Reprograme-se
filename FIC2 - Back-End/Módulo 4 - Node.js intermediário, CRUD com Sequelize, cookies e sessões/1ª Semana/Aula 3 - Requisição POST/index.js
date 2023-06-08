const express = require("express");
const app = express();
const porta = 3000;
var Route = require("./routes/Route");

const hand = require("express-handlebars");
app.set("view engine", "html");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

app.use("/", Route);
app.use(express.urlencoded({ extended: true }));

app.listen(porta, () => {
  console.log("Servidor rodando na porta 3000");
});
