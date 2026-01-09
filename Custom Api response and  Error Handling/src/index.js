import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config();


connectDB().then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("MongoDB connection failed!!",err)
});
