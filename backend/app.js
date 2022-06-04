const express = require('express');
const AuthRoutes = require('./routes/AuthRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app= express();

// const DB= require("./DB/connection");

// DB;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    credentials: true,
    origin: true
  };
app.use(express.static(path.join(__dirname+"/public")));
app.use(cors(corsOptions));
app.use("/",AuthRoutes);

const PORT=process.env.PORT || 2000;
app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in sever Staring ",err);
    }else{
        console.log("Server started .....",PORT)
    }
})