function start(res) {
    function sleep(millSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime+ millSeconds);
    }
    sleep(10000);
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write("这是start方法");
    res.end();
}
function upload(res) {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write("这是upload方法");
    res.end();
}

exports.start = start;
exports.upload = upload;