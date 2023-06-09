# Enviar Correo Electronico con NodeJS

**- PASO 1:**
Iniciar un proyecto en NodeJS con el comando
`npm init -y`
Esto crear un archivo package.json con el fin de llevar un control de todos mis paquetes (Modulos) instalados en el proyecto.

**- PASO 2:**
Instalar la biblioteca `nodemailer` utilizando npm (Gestor de paquetes de Node). Puedes hacerlo ejecutando el siguiente comando en tu terminal:
`npm install nodemailer`
Nodemailer es un módulo (Biblioteca) que nos permitirá añadir estas funcionalidades en nuestro servidor Node.js.

**- PASO 3:**
Importar la biblioteca `nodemailer` en tu archivo de Node.js:
`const nodemailer = require('nodemailer');`

**- PASO 4:**
Configurar el servicio de correo electrónico que deseas utilizar.
`const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tu_correo_electronico@gmail.com',
    pass: 'tu_contraseña'
  }
});`

**- PASO 5:**
Definir el contenido del cuerpo para el correo electrónico que deseas enviar
`const mailOptions = {
from: 'tu_correo_electronico@gmail.com',
to: 'destinatario@ejemplo.com',
subject: 'Prueba de correo electrónico con Node.js',
text: 'Hola, esto es una prueba de correo electrónico enviado con Node.js.'
};`

**- PASO 6:**
Envía el correo electrónico utilizando el método sendMail del objeto transporter
`transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo electrónico enviado: ' + info.response);
  }
});
`


**- IMPORTANTE**
Para enviar HTML en Node.js a través de un correo electrónico, debes cambiar la propiedad text de mailOptions a html.


### Ultimo paso:

Correr proyecto con el comando:
`node enviarCorreo.js`

Nota:
Es importante tener en cuenta que algunas cuentas de correo electrónico requieren configuraciones de seguridad adicionales para permitir el acceso a aplicaciones menos seguras. Si tienes problemas para enviar correos electrónicos, debes verificar la configuración de seguridad de tu cuenta de correo electrónico.

Link de Google para activar el acceso a aplicaciones menos seguras
https://myaccount.google.com/security?rapt=AEjHL4MaDUbe0PLC6gtYdwtcdZXYXcnW8XcFt-xZjyOOc_dV8chSLO0nobRzal303QR5-Ny1SgFAwFw_AEZgDWduTFTSA-5dHQ

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/paquete-nodemailer.png)

###### Código para enviar email

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/portada_enviar_email_con_node.PNG)
