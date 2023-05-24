const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const porta = 443;

app.use(session({ secret: "123" }));

app.use(bodyParser.urlencoded({ extended: true }));

var login = "admin";
var senha = "1234";

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("logado");
    console.log("Usuário logado: " + req.session.login);
  } else {
    res.render("home");
  }
});

app.post("/", (req, res) => {
  if (req.body.password == senha && req.body.login == login) {
    req.session.login = login;
    res.render("logado");
  } else {
    res.render("home");
  }
});

app.get("/sendmail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0eb4a8abc5e910",
      pass: "c3bf02ce6b9598",
    },
  });

  var message = {
    from: "aylmer.bolzan@gmail.com",
    to: "aylmer.bolzan@gmail.com",
    subject: "Aylmer Bolzan - Polo Domingos Martins",
    text: "Conclusão do Trabalho Prático da 4ª Semana - F2M2",
    html: "<p>Conclusão do Trabalho Prático da 4ª Semana - F2M2</p>",
  };

  transport.sendMail(message, function (err) {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: email não enviado",
      });
    else {
      return res.json({
        mensagem: "Email enviado com sucesso!",
      });
    }
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
