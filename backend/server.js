import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    dbName: "Blogg_MERN",
    // useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Mount authentication routes
app.use("/api/auth", authRoutes);

// Mount blog routes
app.use("/api/blogs", blogRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
