const express =require("express");
const bodyParser=require("body-parser")


const mongoose = require("mongoose");




const app=express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const Funcom=async()=>{

    await mongoose.connect(   `mongodb+srv://bikramdhami296:bikramdhami@cluster0.7zwsahn.mongodb.net/UserData/retryWrites=true&w=majority`.then(()=>{
     app.post("/",async(req,res)=>{
         console.log(req.body);
         res.json(data)
     })
     app.listen(4000,()=>{
         console.log("connet with 4000 port")
     });
    }));
  
 
 //     const data=await mds.save()
 

} 
