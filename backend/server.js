import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const app = express()



mongoose.connect(process.env.REACT_APP_MONGODB_URI)
console.log(process.env.REACT_APP_MONGODB_URI);

app.listen( 5000, console.log("server is running"))