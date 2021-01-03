var express = require('express');
var app = express();
const bodyParser = require('body-parser');

console.log("Hello World");

/*app.get('/', (req, res) => {
  res.send('Hello Express');
});*/

const customMiddlware = (req, res, next) => {
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
}

app.use(express.static(__dirname + '/public'));
app.use(customMiddlware);
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
  let word = req.params.word;
  res.json({'echo': word});
});

app.get('/name', (req, res) => {
  let firstname = req.query.first;
  let lastname = req.query.last;
  res.json({ 'name': firstname+" "+lastname});
});

app.post('/name', (req, res) => {
  let firstname = req.body.first;
  let lastname = req.body.last;
  res.json({ 'name': firstname+" "+lastname});
});








 module.exports = app;
