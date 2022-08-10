const express = require('express');
const path = require('path')
const router = express.Router();
/*
step 1:
adding routes
*/

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'));//just giving location of file
})
module.exports = router;