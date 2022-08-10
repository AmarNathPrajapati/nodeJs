const http = require('http');
const url = require('url');
//creating a server
http.createServer(function(req,res){
    res.writeHead(200,
        {"content-type":"text/html"});//adding a head to serve big files;
    // res.write("This is response for the client");
    // res.write(req.url);
    let q = url.parse(req.url,true).query;
    let text = q.year +" "+q.month;
    res.end(text);//ending of the response
}).listen(8080);