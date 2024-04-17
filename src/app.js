import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

// app.use() is used for all the configurations,middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN, //  CORS_ORIGIN defines on what locations we are accepting requests
    credentials:true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended:true, 
    limit: "16kb"
}))

app.use(express.static("public")) //to store public asserts

app.use(cookieParser())

//routes import

import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)
//http://localhost:2050/api/v1/users/register 

export default app;