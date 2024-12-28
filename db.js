import mongoose from 'mongoose';
import dotenv from 'dotenv';
const url = dotenv.config().parsed.MONGODB_URI;

export const connectdb = async () =>{
    try {
        await mongoose.connect(url);
        console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
}