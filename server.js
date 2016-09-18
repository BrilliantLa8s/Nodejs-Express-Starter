'use strict';

var express = require('express');
var app = express();

// Client App Directory
app.use(express.static('public'));

// Serve Application
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Brilliant app listening on port ' + server.address().port);
});
