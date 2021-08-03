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

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: EMAILADDRESS,
    pass: EMAILPASS
  }
})


app.post('/email', function ( req, res ) {
  console.log('request received')
  console.log( req.body );
  transporter.sendMail({
    from: '<A new client>',
    to: EMAILADDRESS,
    subject: 'Constructing Connections Outreach from ' + req.body.email,
    text: req.body.message + '\nRespond to client: ' + req.body.email
  })
  .then( ( response ) => {
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