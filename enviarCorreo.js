//Importa la biblioteca nodemailer en tu archivo
const nodemailer = require("nodemailer");

// Configuración del servicio de correo electrónico
const transporter = nodemailer.createTransport({
  /**
   * Para utilizar otro servicio de correo electrónico, como Yahoo o Outlook, debes
   * cambiar el valor de la propiedad service y ajustar la configuración de autenticación correspondiente.
   */
  service: "gmail",
  auth: {
    user: "programadorphp2017@gmail.com",
    pass: "",
  },
});

// Definir el contenido del correo electrónico que deseas enviar
const mailOptions = {
  from: "programadorphp2017@gmail.com",
  to: "urian1213viera@gmail.com",
  subject: "Prueba de correo electrónico con Node.js",
  text: "Hola, esto es una prueba de correo electrónico enviado con Node.js.",
};

// Envía el correo electrónico utilizando el método sendMail del objeto transporter
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Correo electrónico enviado: " + info.response);
  }
});
