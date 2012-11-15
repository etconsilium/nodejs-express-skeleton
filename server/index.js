if ('undefined' == typeof APPROOT) { APPROOT = __dirname+'/..'; }
require('./globals.js');

exports.run = function(){
var app = require('./app.js');
	// роуты здесь
	app.get('/', function(req,res){res.render('index')});

	//	404 etc
	app.get('*', function(req, res) {
	    res.send('El pueblo unido jamás será vencido', 451);
	});

	console.log('server run');
	app.listen(app.o.port||8888, app.o.host||'0.0.0.0');
}
