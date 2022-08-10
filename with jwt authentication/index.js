const express = require("express");
const jwt = require("jsonwebtoken");

const app  = express();
app.get("/api",(req,res)=>{
    res.json({
        message:"file is running",
    })
})
app.post("/api/posts",(req,res)=>{
    res.json({
        message:"post is running",
    })
})
app.post("/api/login",(req,res)=>{
    const user={
        id:1,
        username:"amar",
        email:"amar@gmail.com"
    }
    jwt.sign({user:user}, "secretkey",(err,token)=>{
        res.json({
            token,
        })
    })
})
app.listen(3000,(req,res)=>{
    console.log("Server is running on the port : 3000");
})