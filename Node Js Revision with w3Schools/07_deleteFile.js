var fs = require('fs');

fs.unlink('mynewfile4.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});