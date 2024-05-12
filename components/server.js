// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { email } = req.body;

  // Configura el transporter para enviar correo electrónico
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sibartech@gmail.com", // Tu dirección de correo electrónico
      pass: "Mancos2024*", // Tu contraseña de correo electrónico
    },
  });

  // Define el correo electrónico a enviar
  const mailOptions = {
    from: "sibartech@gmail.com", // Tu dirección de correo electrónico
    to: "sibartech@gmail.com", // El correo electrónico de destino
    subject: "Solicitud de información",
    text: `La persona con correo electrónico ${email} quiere saber más sobre ustedes.`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo electrónico.");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("Correo electrónico enviado con éxito.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
