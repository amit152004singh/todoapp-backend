//import the model

const todo= require("../models/todo");
 
//define the route handler

exports.createTodo = async(res,req)=>{
   try{
    //extract title and description from request body
    const {title,description} =req.body;
    //create a new todo obj and insert in db
     const response =await todo.create({title,description});
     //send a json response with a success flag
     res.status(200).json(
        {
            success:true,
            data:response,
            message:`entery successfully created` ,
        }

     )
   }
   catch(err){
    console.error(err);

    console.log(err);
    res.status(500)
    .json(
         {
        success : false,
        data:"internal server error",
        message: err.message,
   })

   }
}