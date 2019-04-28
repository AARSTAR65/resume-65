var express = require('express');
var app = express();
var path = require("path");
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('public/index');
   console.log("Ae mubaarak ho Bro!!! \nChl pda!!! ");
});

app.get('/res-paper.html', function (req, res) {
   res.render('public/paper');
   console.log("Ae mubaarak ho Bro!!! \nChl pda!!! ");
});

app.get('/res-tech.html', function (req, res) {
   res.render('public/ht');
   console.log("Ae mubaarak ho Bro!!! \nChl pda!!! ");
});



app.listen(2828, function (req, res) {
   console.log("Server chaalu ho gya re!!!")
});     