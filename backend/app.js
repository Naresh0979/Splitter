const express = require('express');
const AuthRoutes = require('./routes/AuthRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();

// const DB= require("./DB/connection");

// DB;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    credentials: true,
    origin: true
  };

app.use(cors(corsOptions));
app.use("/",AuthRoutes);
app.listen(2000,(err)=>{
    if(err){
        console.log("Error in sever Staring ",err);
    }else{
        console.log("Server started .....")
    }
})