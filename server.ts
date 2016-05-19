'use strict';

// initialize variables
let express = require('express');
let app = express();

// specify port
app.set('port', (process.env.PORT || 5000));

// declare static assets
app.use(express.static(__dirname + '/web'));

// declare routes
app.get('/', function(request, response) {
  response.render('web/index');
});

// start web server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
