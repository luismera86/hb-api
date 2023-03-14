import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/hb')

    console.log('Conectado a mongo')
    
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

export default connectDB