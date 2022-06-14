const mongoose = require('mongoose')
const DB = 'mongodb+srv://gautam:gautam@cluster0.0mjb7.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('connection sucessfull');
}).catch((err) => console.log(err))
