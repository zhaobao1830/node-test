var server = require('./server');
var router = require('./route');

var postHandlers=require('./postHandlers');

//路由表，也可以叫路由集合
var handle = {};
handle['/'] = postHandlers.start;
handle['/start'] = postHandlers.start;
handle['/upload'] = postHandlers.upload;

//把router注入到server中
server.start(router.route, handle)
