var express = require('express');
var router = express.Router();

var app = express();
var port = 3000;

app.get('*', (req, res) => {
  res.redirect('https://tonybarnes.me');
});


app.listen(port);
console.log('Server running on port ' + port);
