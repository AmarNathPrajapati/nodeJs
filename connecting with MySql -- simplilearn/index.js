const mysql = require('mysql');
const express = require('express');

// create connnection
const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"nodemysql2"
})
// connect ot mySql
db.connect((err)=>{
    if(err){
        throw err
    }
    console.log('mysql connected');
})

// creating Database
const app = express();
app.get('/createDb',(req,res)=>{
    let sql = 'create database nodeMySql2'
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.end('Database Created');
    })
})
app.get('/createTableEmployee',(req,res)=>{
    let sql = `create table Employee(
        id int primary key,
        name varchar(50),
        email varchar(50),
        phone int(20)
        )`
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.end('Employee Table Created');
    })
})

//insert employee
app.get('/Employee1',(req,res)=>{
    let sql = `insert into employee values(1,"Amar Nath","amarnath@gmail.com",12345)`
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.end('Employee inserted');
    })
})

// select employee
app.get('/selectEmployee',(req,res)=>{
    let sql = `select * from nodemysql2.employee`;
    let query =db.query((sql),(err, results)=>{
        if(err){
            throw err
        }
        res.end('Employee fetched')
        console.log(results);
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})