import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb = async () => {    //db is an another continent
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed: ", error);
        process.exit(1);
    }
} 

export default connectDb;