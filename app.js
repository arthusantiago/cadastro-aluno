//configuração de includes
var app = require('./app_config.js');

//variável responsavel por acessar todas as ações executadas no banco de dados
var userController = require('./controller/userController.js');

//Validator - Segurança nas requisições
var validator = require('validator');

//Rota padrão
app.get('/',function (req, res){
	res.json('Servidor no Ar!');
});


//Listando os alunos
app.get('/alunos',function (req, res){

	//chamando o controller
	userController.list(function(resp){
		res.json(resp);
	});
});



//Encontrando um aluno
app.get('/aluno/:id',function (req, res){
	//pegando da requisição o parametro para entrontrar o aluno
	var id = validator.trim(validator.escape(req.param('id')));

	//chamando o controller
	userController.user(id,function(resp){
		res.json(resp);
	});
});



//Criando um aluno
app.post('/aluno',function (req, res){
	// pegando da requisição os parametros
	var nome = validator.trim(validator.escape(req.param('nome')));
	var nota = validator.trim(validator.escape(req.param('nota')));

	//chamando o controller
	userController.save(nome, nota, function(resp){
		res.json(resp);
	});
});
	

//aditando um aluno
app.put('/aluno',function (req, res){
	//pegando os parametros da requisição
	var id = validator.trim(validator.escape(req.param('id')));
	var nome = validator.trim(validator.escape(req.param('nome')));	
	var nota = validator.trim(validator.escape(req.param('nota')));
	
	//chamando o controller
	userController.update(id, nome, nota, function(resp){
		res.json(resp);
	});
});


//Deletando um aluno
app.delete('/aluno/:id',function (req, res){
	//pegando o id da requisição 
	var id = validator.trim(validator.escape(req.param('id')));

	//chamando o controller
	userController.delete(id,function(resp){
		res.json(resp);
	});
	
});