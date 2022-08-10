/**
 * 1. Follow the documentation (The express documentation is treasury for you)
 * 2. using express, application programming interface can be created easily.
 * it is the server side framework
 * 3. To install: npm i express 
 * features of express
 * 1.neat and clean code 
 * 2.easy to understand
 * 3.No need to maintain 404 error
 */
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
/**
 * concept of middleware
 * it is function and restore access of request and response
 * __dirname is a variable and the second parameter will be folder name
 * you can write your own middleware
 * to use middleware, app.use must be used
 * recommended: use built-in middleware.
 */
const amarMiddleware = (req, res, next) =>{
  /**
   * req- request matlab jo aa rahi hai.
   * res- response matlab jo ja raja hai.
   * next- to run next middleware, if you are working with multiple middleware.
   */
  console.log(req);
}
app.use(express.static(path.join(__dirname,"public")));
// app.use(amarMiddleware);
/**
 * use of req parameter
 */
app.get('/hello/:variable',(req,res)=>{
  res.send("Hello "+req.params.variable);
})
app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
//   res.send('Hy! I am Amar Nath')
/**
 * to send html file, use path module
 * Now, you are able to make a static page using express.
 */
    // res.sendFile(path.join(__dirname,"index.html"));
// send status  and to check status go network section and reload page
    // res.status(500);// for internal server error
// to send json file  **it's very useful**express set content-type and required header automately.
    res.json({
      "name":"Amar Nath",
      "Programmer":true,
      "Age":20
    })    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})