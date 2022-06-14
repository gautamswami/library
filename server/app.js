const mongoose = require('mongoose')
const express = require("express");
const app = express();
require('./db/conn')
app.use(express.json());
// const User = require('./model/userSchema')
app.use(require('./router/auth'));

const middleware = (req,res,next) => {
    console.log("this is moddleware")
    next();
}
// app.get('/' , (req,res)=>{
//     res.send('hello from server side app.js')
    
// });

app.get('/upload' , middleware , (req,res)=>{
    res.send('hello UPLOAD from server side app.js')
});

app.get('/getaccount' , (req,res)=>{
    //res.cookie("hello",'hiii')
    res.send('hello CREDENTIAL from server side app.js')
});

app.get('/login' , (req,res)=>{
    res.send('hello LOgin from server side app.js')
});

app.listen(3000, ()=>{
    console.log("it started at 3000")
})