import dotenv from "dotenv";
// import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import express from "express"
const app = express()

dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000, () =>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err);
})