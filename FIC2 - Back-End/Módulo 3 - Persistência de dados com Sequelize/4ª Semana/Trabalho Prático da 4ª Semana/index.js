//Bibliotecas/módulos utilizados
const database = require("./db/db");
const express = require("express");
const app = express();
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideo");
const VideosController = require("./controllers/ControllerVideo");
const hand = require("express-handlebars");

app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

app.use("/", VideoRoutes);

//Sincronismo do banco de dados
try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log("Servidor rodando na porta 9443");
    });
  });
} catch (error) {
  console.log("Não foi possível sincronizar o banco de dados:", error);
}
