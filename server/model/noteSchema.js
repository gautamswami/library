const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    course:{ 
    type:String,
    required:true
    },
    branch:{
        type:String,
    },
    semester:{
        type:String
    },
    name:{
        type:String
    },
    unit:{
        type:String
    },
    link:{
        type:String
    }
})

const Notes = mongoose.model('notess',noteSchema)
module.exports = Notes;