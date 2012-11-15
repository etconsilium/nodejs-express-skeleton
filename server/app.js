
var o = options = require('./options.js');
var app = express.createServer(	/*{параметры https}*/ );
app.o = app.options = options;

app.configure( function () {
  app.set('port', app.o.port);
  app.set('view engine', app.o['view engine']);
  app.set('views', app.o.view);
  app.set('view layout', app.o['view layout']);
  app.set('view options', app.o['view options']);

  app.use(express.favicon());

  // не требуются, если сверху стоит веб-сервер
  //app.use(express.methodOverride());
  //app.use(express.static(path.join(__dirname, 'public')));

  app.use(express.logger('dev'));
  app.use(express.static(APPROOT + '/public'));   //  если не требуется обработка, парсинг, сессии и роутинг, то надо здесь

  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'auth_mode'}));

  app.use(app.router);
  // app.use(express.static(APPROOT + '/public'));
  app.use(express.errorHandler());

});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

module.exports=app;
