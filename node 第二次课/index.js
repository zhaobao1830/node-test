//使用http模块，构建一个服务器
var http = require("http");
var fs = require("fs");
http.createServer(function (req,res) {
    console.log(req)
    fs.appendFileSync("test.json", req)
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write("hello word");
    res.end();
}).listen(80, function () {
    console.log("Server is starting on port 80")
})