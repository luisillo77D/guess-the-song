import mongoose from 'mongoose';
import dotenv from 'dotenv';
const url = 'mongodb+srv://luisillo77mario:sapo2002@xddddd.plaej.mongodb.net/?retryWrites=true&w=majority&appName=xddddd';

export const connectdb = async () =>{
    try {
        await mongoose.connect(url);
        console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
}