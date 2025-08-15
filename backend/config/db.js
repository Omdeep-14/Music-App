import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDb = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB uri not found");
  }

  try {
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Unable to connect DB");
    process.exit(1);
  }
};

export default connectDb;
