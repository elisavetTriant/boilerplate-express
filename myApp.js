var express = require('express');
var app = express();

console.log("Hello World");

/*app.get('/', (req, res) => {
  res.send('Hello Express');
});*/

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
});



































 module.exports = app;
