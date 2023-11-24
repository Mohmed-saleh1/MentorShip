import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error('MongoDB URI is not provided');
    }

    await mongoose.connect(MONGO_URL);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

export default connectDB;
