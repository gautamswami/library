const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    unit:{
        type:Number,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
        }
    }
    ]
})
// passowrd hashing pre funstion ( middleware)

userSchema.pre('save', async function (next){
    if(this.isModified('link')){
        this.link = await bcrypt.hash(this.link, 12)
    }
    next();
})


/// generatwe  token
const SECRET_KEY = "MYNAMEISGAUTAMSWAMI"
userSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id},SECRET_KEY)
        this.tokens = this.tokens.concat({token : token});
        await this.save()
        return token;
    }
    catch(err){
        console.log(err)
    }
}

const User = mongoose.model('notes', userSchema);

module.exports = User;

