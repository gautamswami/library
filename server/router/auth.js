const { compare } = require('bcryptjs');
const { json } = require('express');
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('../db/conn');
const User = require("../model/userSchema")
const Notes = require("../model/noteSchema")
router.get('/' , (req,res)=>{
    res.send('hello from router side auth.js')
});

// ----- post using async await ------ //

router.post('/upload',async (req,res)=>{

    const {name,unit,link } = req.body;

    if(!name || !unit || !link){
        return res.status(422).json({error:"field empty"})
    }
    try{
       const userExists = await User.findOne({name:name});
       if(userExists){
        return res.json({erroe:"user exists"})
      }
      const user = new User({name,unit,link})
        // to hash password or desired thing //

      const userSave = await user.save();

      if(userSave){
        res.json({message:"user sucsss"});
      }
      else{
        res.json({error:"fail user"})
      }

      
    }
    catch(err){
        console.log(err)
    }

    

})
    
router.post('/notes',async (req,res)=>{
    const {course,branch,semester,name,unit,link} = req.body;
    try{
      const notes = new Notes({course,branch,semester,name,unit,link});
    const noteSave = await notes.save();
    if(noteSave){
      res.json({message:"user sucsss"});
    }
    else{
      res.json({error:"fail user"})
    }
    }
    
    catch(err){
      console.log("FUCK");
    }
  })


// -------- login route ---------------

router.post('/login', async (req,res)=>{
    
    let token
    // console.log(req.body);
    // res.json({message:"hi mssg from res.json of login"})
        try{
                const {name,unit,link} = req.body;
          if(!name || !unit || !link ){
              res.json({message:"field empty in login"})
          }
          const userLogin = await User.findOne({name : name})
          console.log(userLogin);

          //password match
          //   if(isMatch){
              
              //   }
              if(userLogin){ 
            const isMatch = await bcrypt.compare(link, userLogin.link)
                token = await userLogin.generateAuthToken();
                console.log(token);   
                //res.cookie('jwtoken',token,{
                //expires:new Date(Date.now()+258920000),
                //httpOnly:true                
                // })
          if(!isMatch){
              res.json({error:"not found  password"})
          }
          else {
              res.json({message:"login id mathcherd"})
        }
    }
          else { 
            res.json({message:"Credential mismatch"})

          }

        }
        catch(err){
            console.log(err)
        }
})  

module.exports = router;




// ------post using promises ------ //

// router.post('/upload', (req,res)=>{

//     const {name,unit,link } = req.body;

//     if(!name || !unit || !link){
//         return res.status(422).json({error:"field empty"})
//     }

//     User.findOne({name:name}).then((userExists)=>{
//         if(userExists){
//             return res.json({erroe:"user exists"})
//         }
//         const user = new User({name,unit,link})
//         user.save().then(()=>{
//             res.json({message:"user sucsss"});

//         }).catch((err)=>res.json({error:"fail user"}));
//     }).catch(err=>{console.log(err);});

//     // console.log(name)
//     // console.log(unit)
//     // console.log(link)

//     //  res.json({message: req.body});
//     // res.send("hii postman bro")
// })
