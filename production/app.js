var MINE_TYPES={html:"text/html",xml:"text/xml",txt:"text/plain",css:"text/css",js:"text/javascript",json:"application/json",pdf:"application/pdf",swf:"application/x-shockwave-flash",svg:"image/svg+xml",tiff:"image/tiff",png:"image/png",gif:"image/gif",ico:"image/x-icon",jpg:"image/jpeg",jpeg:"image/jpeg",wav:"audio/x-wav",wma:"audio/x-ms-wma",wmv:"video/x-ms-wmv",woff2:"application/font-woff2"},PORT=3e3,http=require("http"),url=require("url"),fs=require("fs"),path=require("path"),root=process.cwd(),server=http.createServer(function(e,i){var t=decodeURIComponent(url.parse(e.url).pathname),r=path.join(root,t),a=path.extname(r);a||(r=path.join(r,"/index.html"),a=".html"),fs.exists(r,function(e){e?fs.readFile(r,"binary",function(e,t){e?(i.writeHead(500,{"Content-Type":"text/plain"}),i.write("ERROR, the reason of error is "+e.code+"; Error number is "+e.errno+".")):(i.writeHead(200,{"Content-Type":MINE_TYPES[a.slice(1)]||"text/plain"}),i.write(t,"binary")),i.end()}):(i.writeHead(404,{"Content-Type":"text/plain"}),i.write("This request URL "+t+" was not found on this server."),i.end())})});server.listen(PORT),console.log("server running at port "+PORT);