// NPM
// NPM is the package manager. www.npmjs.com hosts thousands of free packages to download and use

/**
 *          package
 *  A package in Node.js contains all the files you need for a module
 */
const uc = require('upper-case');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);