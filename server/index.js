import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/UserRoutes.js";
import WorkoutRoutes from "./routes/WorkoutRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//Connect to database
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.log(err);
    });
};
//Start Server
const startServer = async () => {
  try {
    connectDB();
    app.listen(5000, () => console.log("Server running at port 8080"));
  } catch (error) {
    console.log(error);
  }
};
startServer();

//Routes
app.use("/api/user/", UserRoutes);
app.use("/api/workout/", WorkoutRoutes);
