var server = require('./server');
var router = require('./route');

var requestHandlers=require('./requestHandlers');

//路由表，也可以叫路由集合
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

//把router注入到server中
server.start(router.route, handle)
