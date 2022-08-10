/**
 * Multiple Receivers
To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas

Send HTML
To send HTML formatted text in your email, use the "html" property instead of the "text" property


 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amarnathjnp2002@gmail.com',
      pass: 'Amar@3142'
    }
  });
  
  var mailOptions = {
    from: 'amarnathjnp2002@gmail.com',
    to: 'amarnathjnp2002@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  