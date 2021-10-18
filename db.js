const mongoose = require("mongoose");
//process.env.URI  
//var mongoURL="mongodb+srv://jihen:jihen123@cluster0.rso7k.mongodb.net/mern-pizaa?retryWrites=true&w=majority"
var mongoURL="mongodb://localhost:27017/mern-pizaa" 
//conection au db mern-pizaa
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})
var db = mongoose.connection
db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`); 
})

module.exports =mongoose