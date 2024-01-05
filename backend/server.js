import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()


mongoose.connect(process.env.MONGODB_URI)

app.listen( 5000, console.log("server is running"))