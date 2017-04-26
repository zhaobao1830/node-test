function route(handle,pathname) {
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log("没有找到路径："+pathname)
    }

}

exports.route = route;