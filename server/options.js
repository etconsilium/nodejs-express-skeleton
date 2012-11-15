module.exports = {
	'port'	:	8888
	,'host'	:	'0.0.0.0'	//	хост должен быть нормальным хостом, потому что в днс.жс нет обёртки
	,'view engine' : 'ejs'
	,'view' : APPROOT + '/views'	//	как-то это наколенно и костыляво
	,'view layout': true
	,'view options': require(APPROOT + '/views/options.js').total	 //  ejs не понимает "вложенных объектов", только скаляры и вектора.
}