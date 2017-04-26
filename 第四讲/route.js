function route(handle,pathname,res) {
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](res);
    }else{
        console.log("没有找到路径："+pathname)
        res.writeHeader(404, {'Content-Type': 'text/plain'});
        res.write("404 not found");
        res.end();
    }

}

exports.route = route;