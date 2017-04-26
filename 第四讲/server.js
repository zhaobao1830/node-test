var http = require('http');
var url = require('url');

function start(route,handle) {
    function onRequest(req,res) {
        var pathname = url.parse(req.url).pathname;
        if(pathname === '/favicon.ico'){

        }else{
            var content = route(handle,pathname,res)
        }
    }
    http.createServer(onRequest).listen(8888, function () {
        console.log("Server is starting on port 8888")
    })

}

exports.start = start;
