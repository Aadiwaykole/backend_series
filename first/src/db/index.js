import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async()=>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.
            MONGODB_URS}/${DB_NAME}`)
            console.log(`\n mongodb connected successfully to 
                ${connectionInstance.connection.host} `)

    }
    catch(error){
        console.log("mongodb connection fAILED :",error)
        process.exit(1)
    }
}



export default connectDB;