
const mongoose = require('mongoose');
mongoose.connect("mongodb://splittermgnk2022:mgnk12345678@cluster0-shard-00-00.tw5rl.mongodb.net:27017,cluster0-shard-00-01.tw5rl.mongodb.net:27017,cluster0-shard-00-02.tw5rl.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gpz22e-shard-0&authSource=admin&retryWrites=true&w=majority");

mongoose.connection.on('open',()=>{
    console.log("connected to database");
})

module.exports = mongoose;