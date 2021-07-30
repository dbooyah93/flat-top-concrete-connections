const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( { extended: true } ) );

app.use( '/', express.static( __dirname + '/../client/dist' ) );
app.get('/email', function ( req, res ) {
  console.log('request received')
  res.send('Success')
});


app.listen( PORT, () => {
  console.log( 'Listening on..... http://localhost:' + PORT );
})