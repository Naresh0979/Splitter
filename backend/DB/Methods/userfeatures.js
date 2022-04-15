const DB= require("../connection");

const userModel= require("../Models/user");


const jwt = require('jsonwebtoken');

const Find=(username)=>{
    return userModel.findOne({username},function(err,doc){
        if(err){
           console.log(err); 
        //   return false;
        }else{
            if(doc){
                console.log(doc);
                // return true;
            }else{
            console.log("not Found");
            //  return false;
            }
        }
    })

},

AddFriend =  async (userObject,response)=>{
    var check = await Find(userObject.username);
    console.log(check);
    if(check){
        userModel.findOneAndUpdate({username: userObject.defaultUser},
          {"$push": {"friends" : userObject.username,"expenses":{"name": userObject.username,"data": {}}}},{"new": true},
          (err,doc)=>{
              if(err){
                  console.log(err);
              }else{
                  //send mail to check.email => that userObject.default user has added you as his friend;
               
                  response.json({Status: "S",msg: "Added succesfully",doc: doc});
              }
          }
          )
    }else{
        console.log("status Fail")
        response.json({Status:"F",msg: "your friend is not registerd yet"});
    }
  }

  const AddExp=(userObject,response)=>{
   
    userModel.findOneAndUpdate({username: userObject.username,"expenses.name":userObject.user},{'$set' : {"expenses.$.data.desc": userObject.inp.description,"expenses.$.data.date": userObject.inp.date},"$inc":{"expenses.$.data.ammount": userObject.inp.amount}},{"new": true},
    (err,doc)=>{
        if(err){
            console.log(err);
        }else{
            //send mail to check.email => that userObject.default user has added you as his friend;
           console.log(doc);
            response.json({Status: "S",msg: "Added succesfully",doc: doc});
        }
    })
   }
   
const settle=(userObject,response)=>{
        userModel.findOneAndUpdate({username: userObject.username,"expenses.name":userObject.user},{"$inc":{"expenses.$.data.ammount": userObject.val}},{"new": true},
       (err,doc)=>{
           if(err){
               console.log(err);
           }else{
               //send mail to check.email => that userObject.default user has added you as his friend;
              console.log(doc);
               response.json({Status: "S",msg: "Added succesfully",doc: doc});
           }
       })
}
   
   
module.exports =AddFriend,settle,AddExp;