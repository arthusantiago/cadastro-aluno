//configuração do banco de dados
var mongoose=require('mongoose');

//URL de acesso ao banco
//é preciso especificar a porta para acessar
var dbstring='mongodb://127.0.0.1:27017/trab_faculdade';

//o segundo parametro passado é para sumir com um worning de função depreciada 
mongoose.connect(dbstring,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar no banco de dados'));

var UserModel;

//criando o esquema do meu model
db.once('open', function(){
	var userSchema = mongoose.Schema({ nome: String, nota: String });
	
	//model do mongoose que será usado em toda a aplicação.
	exports.UserModel = mongoose.model('usercollection',userSchema);
});