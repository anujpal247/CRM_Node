import mongoose from "mongoose";
import { serverConfig } from ".";
import logger from "./logger.config";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(serverConfig.MONGODB_URI);
    logger.info("DB connected successfully");
    return response;
  } catch (error) {
    logger.error("DB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
