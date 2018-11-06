var express = require('express')
var bodyParser = require("body-parser");
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {
  res.status(200).send('Yes, You used method <b>'+ req.method +'</b> without params')
})

app.get('/:proxy', function (req, res) {
  res.status(200).send('Yes, You used method <b>'+ req.method +'</b> and params: <b>'+ req.params.proxy +'</b>')
})

 
app.post('/', function (req, res) {
    const data = req.body;
    res.status(200).send('Yes, You used method <b>'+ req.method +'</b> and params: <b>'+ JSON.stringify(data, null, 2) +'</b>')
})

app.delete('/:proxy', function (req, res) {
  res.status(200).send('Yes, You used method <b>'+ req.method +'</b> and params: <b>'+ req.params.proxy +'</b>')
})

app.listen(8080);