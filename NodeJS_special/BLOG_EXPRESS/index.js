/**
 * good pratice:
 * Static folder--is used to store static folder like HTML, CSS and JavaScript
 * routes folder-- to store all the routes
 * npm i _____ -d for dev dependencies, it means not a part of our app
 * 
 */


const express = require('express')
const path = require('path')
const app = express()
const port = 3000
// using router
app.use('/',require(path.join(__dirname,'routes/blog.js')));//just using "/" endpoint of routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})