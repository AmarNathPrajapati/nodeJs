const os = require('os');
// console.log(os.uptime());
// console.log(os.hostname());
const path = require('path');
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
const fs = require('fs');
fs.writeFile('file.txt',"This is the text",()=>{
    console.log("written_file");
})