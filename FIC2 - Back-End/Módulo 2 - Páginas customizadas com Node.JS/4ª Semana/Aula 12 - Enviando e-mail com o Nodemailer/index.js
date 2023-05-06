const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const porta = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer!");
});

app.get("/sendmail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a59d75b9a91dd2",
      pass: "e3c4437e6efd52",
    },
  });
  
  var message = {
    from: "aylmer.bolzan@gmail.com",
    to: "aylmerbolzan@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };

  transport.sendMail(message, function (err) {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: email não enviado",
      });
    else {
      return res.json({
        erro: false,
        mensagem: "Email enviado com sucesso!",
      });
    }
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
