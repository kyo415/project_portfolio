import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(uri);
    console.log(`[db] Connected to MongoDB: ${mongoose.connection.name}`);
  } catch (err) {
    console.error("[db] Error connecting to MongoDB:", err.message);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.log("[db] MongoDB disconnected");
  });
}
