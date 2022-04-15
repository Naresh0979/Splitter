const DB= require("../connection");

const userModel= require("../Models/user");


const jwt = require('jsonwebtoken');



 const Register=(userObject,response)=>{

    userModel.create(userObject,(err,doc)=>{
       if(err){
           console.log("Error is ",err);
           response.json({Status: "F"});
       }else{
           response.json({Status: "S", data: doc});
       }
    });
}

const Login=(userObject,response)=>{
    userModel.findOne(userObject,(err,doc)=>{
        if(err){
            console.log(err);
        }else{
            if(doc){
                jwt.sign({doc}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                response.json({Status: "S",msg: "welcome " + doc.username,token: token,data:doc});
                });
            }else{
                response.json({Status: "F",msg: "Invalid username or password"});
            }
        }
    })
}

module.exports ={Login,Register}; 


