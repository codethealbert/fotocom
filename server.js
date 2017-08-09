var express = require('express');
var app = express();

app.set('view engine','pug');
app.use(express.static('public'));

app.get('/', function(req,res) {
  res.render('index',{title:'FotoCom'})
})

app.get('/signup', function(req,res) {
  res.render('index',{title:'FotoCom - Signup'})
})

app.get('/signin', function(req,res) {
  res.render('index',{title:'FotoCom - Signin'})
})

app.listen(3000, function(err){
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('FotoCom escuchando en el puerto 3000');
})