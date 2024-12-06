const dotenv = require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;
const EMAILADDRESS = process.env.EMAILADDRESS;
const EMAILPASS = process.env.EMAILPASS;

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( { extended: true } ) );
app.use( '/', express.static( __dirname + '/../client/dist' ) );

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587, // 587 or 465 for SSL,
  secure: false,
  auth: {
    user: EMAILADDRESS,
    pass: EMAILPASS
  }
})


app.post('/email', function ( req, res ) {
  console.log('request received')
  if (!isValidEmail(req.body.user_email)) {
    res.status(400).send('Bad email format');
  }
  transporter.sendMail({
    from: `"${req.body.user_email}" EMAILADDRESS`,
    to: EMAILADDRESS,
    subject: req.body.user_name,
    text: req.body.user_message,
    replyTo: req.body.user_email
  })
  .then( ( response ) => {
    console.log('success')
    console.log( req.body );
    res.send('Success');
  })
  .catch( ( err ) => {
    console.log( err );
    res.send('fail');
  });
});


app.listen( PORT, () => {
  console.log( 'Listening on..... http://localhost:' + PORT );
})