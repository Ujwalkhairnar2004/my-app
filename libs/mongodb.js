import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
    const connectionString =`mongodb+srv://tinupatil102_db_user:${password}@@cluster0.fjcmdu8.mongodb.net/?appName=Cluster0`;
    //mongodb+srv://tinupatil102_db_user:${password}@cluster0.bqynzhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url
    //mongodb+srv://tinupatil102_db_user:<db_password>@cluster0.i4kganu.mongodb.net/?appName=Cluster0
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectMongoDB;
