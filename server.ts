'use strict';

// initialize variables
let express = require('express');
let app = express();

// specify port
app.set('port', (process.env.PORT || 5000));

// declare static assets
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/web'));

// send all routes to angular index page
app.use(function (request, response) {
  response.sendFile(__dirname + '/web/index.html');
});

// start web server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
