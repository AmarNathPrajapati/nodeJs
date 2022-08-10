var fs = require('fs');

fs.open('mynewfile4.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


fs.writeFile('mynewfile3.txt', 'this is new content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});