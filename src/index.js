// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDb from "./db/db.js";

dotenv.config({path: './env'});


connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running At Port :${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDb Connection Failed !!!", error);
})



/*
import express from "express";
const app = express()

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw err
    }
})()

*/