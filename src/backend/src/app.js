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


import userRouter from './routes/user.routes.js'
import threadRouter from "./routes/thread.routes.js"
import followRouter from "./routes/follow.routes.js"
import postRouter from "./routes/post.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

app.use("/api/v1/users", userRouter)
app.use("/api/v1/threads", threadRouter)
app.use("/api/v1/follows", followRouter)
app.use("/api/v1/posts", postRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/dashboard", dashboardRouter)

export { app }