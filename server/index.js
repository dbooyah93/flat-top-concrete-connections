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

const express = require('express');
const path = require('path');
const router = express.Router();

// Route for serving index.html at /4d-0 path
router.get('/4d-0', (req, res) => {
  // Absolute path to the index.html file
  const filePath = path.resolve(__dirname, 'client', 'dist', '4d-0', 'index.html');

  // Send the file to the client
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error serving the file.');
    }
  });
});

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
    from: EMAILADDRESS,
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