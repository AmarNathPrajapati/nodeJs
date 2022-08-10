const  url = require('url');
// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties
var adr = 'http://localhost:8080/pathname.html?year=2022&month=june';
var q = url.parse(adr, true);

console.log(q);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
