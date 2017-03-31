'use strict';

//使用http模块，构建一个服务器
var http = require("http");
http.createServer(function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.write("hello word");
    res.end();
}).listen(80);

//# sourceMappingURL=index-compiled.js.map