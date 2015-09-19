var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res) {
  res.send(200, 'HI');
});

app.post('/', function(req, res) {
  res.redirect('index.html');
  /*fs.readFile('public/index.html', function(err, data) {
    res.send(200, data);
  })*/
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('listening on port ' + port + '...');
