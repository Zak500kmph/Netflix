import mongoose from "mongoose"
import {db_name} from "./constant.js"

export const Database=async ()=>{
   try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_url}/${db_name}`)
    console.log(`the database is connected at port ${connectionInstance.connection.port}`)
   } catch (error) {
    console.log(error.message)
    process.exit(1)
   }

//         
}