import mongoose from "mongoose"
import express from "express"
const app = express()
app.listen(5000, (req, res) => {
    console.log("server 5000");
})