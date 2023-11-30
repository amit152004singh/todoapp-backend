const mongoose=require('mongoose'); 
require("dotenv").config( );

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        USEUnifiedTopology:true,
    })
    .then(()=>{
        console.log("all good");
    })
    .catch((error)=>{
        console.log("all bad");
        console.error(error.message);
        process.exit(1); 
    });
}

module.exports=dbConnect; mongoose 