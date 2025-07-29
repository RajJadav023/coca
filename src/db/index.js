import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
  try {
   const conndb=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
    console.log(`mongodb connected : Host on : ${conndb.connection.host}`);
    
  } catch (error) {
    console.log("mongodb connection error:" , error);
    process.exit(1);
  }
}

export default connectDB;