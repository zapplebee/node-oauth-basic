var express = require('express');
var app = express();
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

//pug renderer, index
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', {});
});


app.use('/script/angular.js', express.static(__dirname + '/node_modules/angular/angular.js'));
app.use('/script', express.static(__dirname + '/script'));

//sass
app.use(sassMiddleware({
    src: path.join(__dirname, 'style'),
    dest: path.join(__dirname, 'style'),
    debug: true,
    outputStyle: 'extended',
    prefix: "/style"
}));
app.use("/style", express.static(path.join(__dirname, '/style')));


app.use("/images", express.static(path.join(__dirname, 'images')));


//listen
app.listen(3000, function () {
  console.log('localhost:3000');
});