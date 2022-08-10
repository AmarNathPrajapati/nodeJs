var http = require('http');
const dt = require('./02_myfirstModule');

http.createServer(function(req,res){
  res.writeHead(200,{"content-type":"text/html"});
  res.write("I am learning Node js ");
  res.write("\n Today date and time is "+ dt.myDateTime());
  res.end();
}).listen(8080);

