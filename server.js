import mongoose from "mongoose"
import express, { Router } from "express"
import dotenv from "dotenv";
import monodbConnect from "./app/utils/db.js"

dotenv.config();
const app = express()
const PORT = process.env.PORT;
const router = Router()


app.listen( PORT, () => {
    console.log( "server is running on PORT 5000" );
    monodbConnect();
})
