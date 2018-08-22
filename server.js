var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// var myFileDir = function(req, res, next){
//     req.myFileDir = __dirname;
//     next();
// }
// app.use(myFileDir);
// var myLogger = function (req, res, next) {
//   console.log('LOGGED');
//   next();
// };

// app.use(myLogger);

// app.get('/hello', function (req, res) {
//   res.send('Hello World!');
// });

// app.use('/hey', function (req, res, next){
//     console.log('Hey!');
//     next();
//   }, function (require, response){
//     response.send('now what');
//   }
// );

app.get('/', function(req, res){
    res.sendFile(__dirname+'/public/hgfhgf');
});
app.use(function(req, res){
    res.sendFile(__dirname+'/public/404.jpg');

})
app.use(function(err, req, res, next){
    res.send(err.stack);
})
app.listen(8080, function(){
    console.log('running');
});
