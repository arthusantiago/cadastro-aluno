var express = require('express');

var path=require('path');

var app = module.exports = express();

var bodyParser=require('body-parser');

//Configuração de Cors para permitir chamados fora do dominio da aplicação
var allowCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin','localhost:5000, 127.0.0.1:5000');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	res.header('Access-Control-Allow-Credentials','true');

	next();
};

app.listen(5000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

