import mongoose from "mongoose";

const buildMongoURI = () => {
  const host = process.env.MONGO_HOST || "mongo";
  const dbName = process.env.MONGO_DB_NAME || "taskmanager";
  const user = process.env.MONGO_USERNAME;
  const pass = process.env.MONGO_PASSWORD;

  if (user && pass) {
    return `mongodb://${user}:${pass}@${host}:27017/${dbName}?authSource=admin`;
  }
  return `mongodb://${host}:27017/${dbName}`;
};

export const connectDB = async () => {
  const uri = buildMongoURI();
  let connected = false;

  while (!connected) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
      connected = true;
    } catch (error) {
      console.error("MongoDB connection failed. Retrying in 3s...", error.message);
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
};
