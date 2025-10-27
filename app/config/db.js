import mongoose from "mongoose";

export const connectDB = async () => {
  const host = process.env.MONGO_HOST || "mongo";
  const dbName = process.env.MONGO_DB_NAME || "taskmanager";
  const user = process.env.MONGO_USERNAME;
  const pass = process.env.MONGO_PASSWORD;

  const uri = `mongodb://${user}:${pass}@${host}:27017/${dbName}?authSource=admin`;

  let connected = false;

  while (!connected) {
    try {
      console.log("Connecting to MongoDB with URI:", uri);
      await mongoose.connect(uri);
      console.log("✅ MongoDB Connected Successfully");
      connected = true;
    } catch (error) {
      console.error("❌ MongoDB connection failed. Retrying in 3s...", error.message);
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
};
