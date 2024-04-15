import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { LIMIT } from "./constants"  
const app = express()

// app.use() is used for all the configurations,middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN, //  CORS_ORIGIN defines on what locations we are accepting requests
    credentials:true
}))

app.use(express.json({
    limit: LIMIT
}))

app.use(express.urlencoded({
    extended:true, 
    limit: LIMIT
}))

app.use(express.static("public")) //to store public asserts

app.use(cookieParser())

//routes import

import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)
//https://localhost:8000/api/v1/users/register





export { app }