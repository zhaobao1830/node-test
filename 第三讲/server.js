var http = require('http');
var url = require('url');

function start(route,handle) {
    http.createServer(function (req,res) {
        var pathname = url.parse(req.url).pathname;
        route(handle,pathname)
        res.writeHeader(200, {'Content-Type': 'text/plain'});
        res.write("hello word");
        res.end();
    }).listen(80, function () {
        console.log("Server is starting on port 80")
    })

}

exports.start = start;
