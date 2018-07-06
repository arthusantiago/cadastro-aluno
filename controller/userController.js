//variável que dá acesso ao banco de dados
var db = require('../db_config.js');

exports.list = function(callback){

	db.UserModel.find({},function(erros,alunos){
		if(erros){
			callback({erros: 'Não foi possivel encontrar os alunos'});
		} else {
			callback(alunos);
		}	
	});

};

exports.user = function(id, callback){
	db.UserModel.findById(id,function(erros,aluno){
		if(erros){
			callback({erros: 'Não foi possivel encontrar o aluno'});
		} else {
			callback(aluno);
		}	
	});
};

exports.save = function(nome, nota, callback){
	var salvando = new db.UserModel({
		'nome': nome,
		'nota': nota
	});

	salvando.save(function(erros,aluno){
		if(erros){
			callback({error: 'Não foi possivel salvar o aluno'});
		} else {
			callback(aluno);
		}	
	});
};

exports.update = function(id,nome,nota,callback){

	db.UserModel.findById(id,function(erros,aluno){
		if(erros){
			callback({erros: 'Não foi possivel encontrar o aluno'});
		}
		//verificando se os paremetros recebidos da requisição estão vazios, se não estiverem eu salvo o conteudo 
		if(nome){ aluno.nome = nome;}
		if(nota){ aluno.nota = nota;}

		aluno.save(function(erros,aluno){
		if(erros){
			callback({erros: 'Não foi possivel salvar a edição do aluno'});
		} else {
			callback(aluno);
		}	
		});	
	});	
};

exports.delete = function(id,callback){
	db.UserModel.findById(id,function(erros,aluno){
		if(erros){
			callback({erros: 'Não foi possivel encontrar o aluno'});
		} else {
			aluno.remove(function(erros){
				if(!erros){
					callback({response:"Aluno excluido com sucesso"});
				}
			});
		}	
	});
};