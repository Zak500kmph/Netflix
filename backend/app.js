import cookieParser from "cookie-parser"
import express from "express"
import "dotenv/config"
const app=express()
import cors from "cors"
const option={
    origin:process.env.FRONT_END_SERVER
}

app.use(cors(option))


app.use(cookieParser())
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.json({limit:"16kb"}))
app.use(express.static("./public"))
app.get("/",(req,res)=>{res.send("hey this server")})

import router  from "./routes/user.routes.js"
// function fn(req,res,next){res.send("hello")}
app.use("/api/v1",router)


app.listen(process.env.PORT,()=>{console.log("port is running",process.env.PORT)})
export default app;