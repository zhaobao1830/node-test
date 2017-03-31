var server = require('./server');
var router = require('./route');

//把router注入到server中
server.start(router.route)
