const DB= require("../connection");


const Schema=DB.Schema;

const UserSchema= new Schema({


    username: {type: String,required: true,unique: true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    friends: {type: Array},
    expenses: {type: Array}

}



) 

const userModel = DB.model('user',UserSchema);

module.exports = userModel;