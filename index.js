const express= require("express");
const app=express();

//load config from env file
require('dotenv').config; 
const PORT=process.env.PORT||3000;
 
//middleware to pass json request body

app.use(express.json());

//import routes

const todoRoutes=require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);

//strter server
app.listen(PORT,()=>{
console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default route

app.get("/",(req,res)=>{
    res.send(`<h1>This is paragraph</h1>`);
})