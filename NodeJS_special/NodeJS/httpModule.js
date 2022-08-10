const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req,res)=>{
    // res.end("hello world!");
    res.setHeader('content-type','text/html')
    const data = fs.readFileSync('index.html')
    res.end(data.toString());
})
server.listen(port,()=>{
    console.log("listing on port:3000");
})