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
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase')
  	message = message.toUpperCase()
  
  res.json({"message": message});
});



































 module.exports = app;
