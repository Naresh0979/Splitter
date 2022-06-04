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
              //  console.log(doc);
                // return true;
            }else{
            console.log("not Found");
            //  return false;
            }
        }
    })

},

 AddFriend =  async (userObject,response)=>{
  //console.log(userObject.defaultUser);
    var check = await Find(userObject.username);
     var friend= await Find(userObject.defaultUser);
   //  console.log(friend.friends);
     var check2=1;
    for(let v of friend.friends)
    {
        //console.log(v);
        if(v==userObject.username)
            {
                console.log(v);
                check2=0;
                break;
            }

    }
    
  //  console.log(check);
    if(check && check2 == 1){

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
        if(check2==0)
        response.json({Status:"F",msg: "your friend is already added"});
        else
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
   
   
module.exports ={AddFriend,settle,AddExp};