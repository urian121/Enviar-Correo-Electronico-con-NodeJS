const nodemailer = require("nodemailer");
require("dotenv").config();

const senderEmail = process.env.EMAIL;
const senderPassword = process.env.PASSWORD;
const recipientEmail = "urian1213viera@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

const mailOptions = {
  from: senderEmail,
  to: recipientEmail,
  subject: "Prueba de correo electrónico con Node.js",
  text: "Hola, esto es una prueba de correo electrónico enviado con Node.js.",
};

async function enviarCorreo() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Correo electrónico enviado: ${info.response}`);
  } catch (error) {
    console.error(`Error al enviar el correo electrónico: ${error}`);
  }
}

enviarCorreo();
