var fs = require('fs');

fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile2.txt', 'this is new content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
